/**
 * 
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
After doing so, return the array.
 */
var replaceElements = function(arr) {
    let max = 0
    for(let i = arr.length-1; i>=0; i--) {
      const curr = arr[i]
      arr[i] = max ? max : -1
      if(curr > max) {
        max = curr
      }
    }
    return arr
  };
  
  console.log(replaceElements([17,18,5,4,6,1]))