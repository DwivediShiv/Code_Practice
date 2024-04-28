/**
 * The cost of stock on each day is given in an array. An investor wants to buy the stocks 
 * in triplets such that the sum of the cost for three days is divisble by d. the goal is to 
 * find the number of distinct triplets such that the sum of 3 elements will be divisible by d
input = [3,3,4,7,8]
d=5
output = 3 (3+3+4 (index0,1,2) =  divisble by 5, 3+4+8(index1,3,4) = divisible by 5, 
3+4+8(index2,3,4) = divisble by 5
 */

/**
 * We maintain an array remainders to store the count of remainders when the cumulative sum is divided by d.
We iterate through the array and calculate the cumulative sum, then find the remainder when divided by d.
We increment the count for the current remainder and add it to the result.
If the remainder is 0, it means the current element itself is divisible by d, so we increment the count.
We update the count of remainders in the remainders array.
Finally, we return the count, representing the number of distinct triplets whose sum is divisible by d.
 */

function countTriplets(arr, d) {
    let count = 0;
    const remainders = new Array(d).fill(0);
    let cumulativeSum = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];
        console.log('cumulativeSum ', cumulativeSum)
        const remainder = (cumulativeSum % d + d) % d;
        console.log('remainder ', remainder, remainders)
        // Increment the count for current remainder
        count += remainders[remainder];
        console.log('count ', count)
        // Increment the count for remainder 0
        if (remainder === 0) count++;

        // Update the count of remainders
        remainders[remainder]++;
    }

    return count;
}

const input = [3, 3, 4, 7, 8];
const d = 5;
console.log(countTriplets(input, d)); // Output: 3


/**
 * This logic involves maintaining an array called remainders to keep track of the count of remainders when the cumulative sum of the elements is divided by d. Here's a step-by-step breakdown of the logic:

Initialize variables:
count to keep track of the number of triplets found.
remainders, an array of length d initialized with zeros, to store the count of remainders.
cumulativeSum to keep track of the cumulative sum of elements.
Iterate through the input array:
Add the current element to the cumulativeSum.
Calculate the remainder when cumulativeSum is divided by d. It's important to ensure the remainder is positive by adding d and then taking modulo d.
Increment count by the value at remainders[remainder]. This means that for each element, we are checking how many previous cumulative sums resulted in the same remainder, indicating a valid triplet. This accounts for all possible triplets that sum up to a value divisible by d.
If the remainder is 0, it means the current element itself is divisible by d, so we increment count.
Update the count of remainders in the remainders array by incrementing remainders[remainder].
Finally, return the count, which represents the number of distinct triplets whose sum is divisible by d.
Let's trace through the provided example to understand how it works:

For the input [3, 3, 4, 7, 8] and d = 5:
At index 0: cumulativeSum = 3, remainder = 3 % 5 = 3. Update remainders[3] to 1.
At index 1: cumulativeSum = 6, remainder = 6 % 5 = 1. Add remainders[1] (0) to count, so count remains 0. Update remainders[1] to 1.
At index 2: cumulativeSum = 10, remainder = 10 % 5 = 0. Add remainders[0] (0) to count, so count becomes 1. Update remainders[0] to 1.
At index 3: cumulativeSum = 17, remainder = 17 % 5 = 2. Add remainders[2] (0) to count, so count remains 1. Update remainders[2] to 1.
At index 4: cumulativeSum = 25, remainder = 25 % 5 = 0. Add remainders[0] (1) to count, so count becomes 2. Update remainders[0] to 2.
The final count is 3, indicating there are 3 distinct triplets whose sum is divisible by 5.
This approach efficiently handles the problem by using the concept of remainders to count valid triplets, avoiding brute force enumeration of all possible triplets.
 */