/**
 * A password string, pwd, consists of binary characters (0s and 1s). A cyber security expert 
 * is trying to determine the minimum number of changes required to make the password secure. 
 * To do so, it must be divided into substrings of non-overlapping even length substrings. 
 * Each substring can only contain 1s or 0s, not a mix. This helps to ensure that the password 
 * is strong and less vulnerable to hacking attacks.
 Find the minimum number of characters that must be flipped in the password string 
 i.e. changed from 0 to 1 or 1 to 0 to allow the string to be divided as described

pwd = '101011'
output = 2
 */

function minChangesToSecurePassword(pwd) {
    let changesNeeded = 0;

    for (let i = 0; i < pwd.length; i += 2) {
        if (pwd[i] !== pwd[i + 1]) {
            changesNeeded++;
        }
    }

    return changesNeeded;
}

const pwd = '10101110';
console.log(minChangesToSecurePassword(pwd));
