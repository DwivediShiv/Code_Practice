/**
 * Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
 */
var heightChecker = function(heights) {
    let expected = [...heights];
    expected.sort((a,b) => a-b);

    let count = 0;
    for(let index in heights)
        if(heights[index] !== expected[index])  count++;

    return count;
};

heightChecker([1,2,3,4,5]);