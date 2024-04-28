function replaceQuestionMarks(word, substr) {
    const substrLength = substr.length;
    const wordLength = word.length;

    for (let i = 0; i <= wordLength - substrLength; i++) {
        let isValid = true;
        let newWord = '';

        for (let j = 0; j < wordLength; j++) {
            if (word[j] === '?') {
                if (j >= i && j < i + substrLength) {
                    newWord += substr[j - i];
                } else {
                    newWord += 'a'; // Replace with 'a' to form lexicographically smallest string
                }
            } else {
                newWord += word[j];
            }
        }

        if (newWord.includes(substr)) {
            return newWord;
        }
    }

    return -1;
}

// Example usage:
const word = 'as?b?e?gf';
const substr = 'dbk';
console.log(replaceQuestionMarks(word, substr)); // Output: 'asdbkeagf'
