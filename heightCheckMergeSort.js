const merge = (left, right) => {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
  
    while(leftIndex < left.length && rightIndex < right.length) {
      if(left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex])
        leftIndex++
      } else {
        result.push(right[rightIndex])
        rightIndex++
      }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex))
  }
  
  const mergeSort = (arr) => {
    if(arr.length === 1) {
      return arr
    }
  
    const midInd = arr.length / 2
    const leftHalf = arr.slice(0, midInd)
    const rightHalf = arr.slice(midInd)
  
    const sortedLeft = mergeSort(leftHalf)
    const sortedRight = mergeSort(rightHalf)
  
    return merge(sortedLeft, sortedRight)
  }
  
  /**
 * Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
 */
  var heightChecker = function (heights) {
    const sortedArray = mergeSort(heights)
    console.log('*** ', sortedArray, heights)
    let noMatch = 0;
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sortedArray[i]) {
        noMatch++;
      }
    }
    return noMatch
  };
  
  heightChecker([1,2,3,4,5]);
  