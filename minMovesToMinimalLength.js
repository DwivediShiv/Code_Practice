/**
 * 
 * An english lecture at hacker elementry school is aimed at teahing students the letter of the alphabet
The students are provided with a string word that consists of lowercase english letters. In one move they can choose any index i and let the character at that index be c. Then the first occurance of c to the left of i and the first occurance of c to the right of i are deleted (Note: the operation can still be carried out if either the left or right occurance doesn't exists) for example if word = "adabacaea" and if index 4 is choose (0-based) the first occurance of a to the left and right of index 4 are deleted leaving word "adbacea" 
find the minimum number of moves the student need to perform in order to get a word of minimal length
input string = "baabacaa"
output = 3
 */

/**
 * We first count the occurrences of each character using a Map.
Then, we iterate over the counts and add half of each count to the total moves, as each pair of consecutive occurrences can be removed.
Finally, we return the total number of moves required.
 */

function minMovesToMinimalLength(word) {
    const charCount = new Map(); // Map to store the count of each character
    let moves = 0;

    // Count the occurrences of each character
    for (const char of word) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Calculate the moves required
    for (const count of charCount.values()) {
        moves += Math.floor(count / 2); // Add half of the count, as each pair of consecutive occurrences can be removed
    }

    return moves;
}

const word = "baabacaa";
console.log(minMovesToMinimalLength(word));
