function getMaximumEvenSum(arr, n) {
    let posSum = 0;
    for (const value of arr) {
      if (value > 0) {
        posSum += value;
      }
    }
  
    if (posSum % 2 === 0) {
      return posSum;
    }
  
    let res = arr[0];
    for (const value of arr) {
      if (value < 0) {
        res = Math.max(res, posSum + value);
      }
    }
  
    return res
  }
  
  console.log(getMaximumEvenSum([-1, -2, -3, 8, 7]));
  