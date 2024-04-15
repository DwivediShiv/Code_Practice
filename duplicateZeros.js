/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * Input: arr = [1,0,2,3,0,4,5,0]
 * Output: [1,0,0,2,3,0,0,4]
 */
var duplicateZeros = function(arr) {
    const length = arr.length;

  // Count the number of zeros in the array
  let zeroCount = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    }
  }

  // Iterate in reverse and shift elements to the right
  let lastIndex = length - 1;
  for (let i = length - 1; i >= 0; i--) {
    if (i + zeroCount <= lastIndex) {
      arr[i + zeroCount] = arr[i];
    }
    if (arr[i] === 0) {
      zeroCount--;
      if (i + zeroCount <= lastIndex) {
        arr[i + zeroCount] = 0;
      }
    }
  }
};