/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * Input: arr = [1,0,2,3,0,4,5,0]
 * Output: [1,0,0,2,3,0,0,4]
 */
var duplicateZeros = function (arr) {
  let zeros = 0;
  let elArr = [];

  for (const i in arr) {
    if (zeros === 0 && elArr.length === 0) {
      if (arr[i] === 0) zeros++;
    } else if (zeros !== 0) {
      elArr.push(arr[i]);
      arr[i] = 0;
      zeros--;
    } else if (elArr.length !== 0) {
      const curr = arr[i];
      arr[i] = elArr.pop();
      if (curr === 0) {
        zeros++;
      }
      elArr.push(curr);
    }
  }

  console.log("*** ", arr);
};

duplicateZeros([1, 0, 0, 3, 0, 4]);
