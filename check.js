function constructOptimalString(countA, countB, maxA, maxB) {
    let result = '';
    

    while (countA > 0 && (countA >= countB || maxB === 0)) {
        let numA = Math.min(countA, maxA);
        result += 'A'.repeat(numA);
        countA -= numA;
        if (countA > 0 && countB > 0) {
            result += 'B';
            countB--;
        }
    }
    

    while (countB > 0 && (countB >= countA || maxA === 0)) {
        let numB = Math.min(countB, maxB);
        console.log(numB)
        result += 'B'.repeat(numB);
        countB -= numB;
        console.log('countB: ', countB, countA)
        if (countB > 0 && countA > 0) {
            result += 'A';
            countA--;
        }
    }
    
    return result;
}

// Example usage:
const countA = 2;
const countB = 4;
const maxA = 2;
const maxB = 1;

console.log(constructOptimalString(countA, countB, maxA, maxB));

// function constructOptimalString(countA, countB, maxA, maxB) {
//     let result = '';

//     while (countA > 0 || countB > 0) {
//         // Construct 'A' substring
//         let numA = Math.min(countA, maxA);
//         result += 'A'.repeat(numA);
//         countA -= numA;

//         // If there are remaining 'A's, add 'B' to balance if maxB allows
//         if (countA > 0 && maxB > 0 && (countA >= countB || countB === 0)) {
//             result += 'B';
//             countB--;
//         }

//         // Construct 'B' substring
//         let numB = Math.min(countB, maxB);
//         result += 'B'.repeat(numB);
//         countB -= numB;
//     }

//     return result;
// }

// // Example usage:
// const countA = 2;
// const countB = 4;
// const maxA = 2;
// const maxB = 1;

// console.log(constructOptimalString(countA, countB, maxA, maxB));  // Output: AABAB


// function constructOptimalString(countA, countB, maxA, maxB) {
//     let result = '';
    
//     while (countA > 0 || countB > 0) {
//         // Construct substring of 'A'
//         let numA = Math.min(countA, maxA);
//         result += 'A'.repeat(numA);
//         countA -= numA;
        
//         // If there are remaining 'A's, add 'B' to balance if maxB allows
//         if (countA > 0 && (countA >= countB || countB === 0)) {
//             result += 'B';
//             countB--;
//         }
        
//         // Construct substring of 'B'
//         let numB = Math.min(countB, maxB);
//         result += 'B'.repeat(numB);
//         countB -= numB;
//     }
    
//     return result;
// }

// // Example usage:
// const countA = 2;
// const countB = 4;
// const maxA = 2;
// const maxB = 1;

// console.log(constructOptimalString(countA, countB, maxA, maxB));  // Output: AABAB













// function getOptimalStringLength(countA, countB, maxA, maxB) {
//     let minA = Math.min(countA, countB);
//     let minB = Math.min(countA, countB);
    
//     // Calculate the maximum length of substrings of 'A' and 'B'
//     let maxLenA = minA * maxA + Math.min(countA - minA, 1);
//     let maxLenB = minB * maxB + Math.min(countB - minB, 1);
    
//     // Determine the lengths of substrings of 'A' and 'B'
//     let lenA = Math.min(maxLenA, countA);
//     let lenB = Math.min(maxLenB, countB);
    
//     // Return the sum of these lengths
//     return lenA + lenB;
// }

// // Example usage:
// let countA = 2;
// let countB = 4;
// let maxA = 2;
// let maxB = 1;
// console.log(getOptimalStringLength(countA, countB, maxA, maxB));  // Output: 7

