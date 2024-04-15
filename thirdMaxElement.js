var thirdMaxFn = function(nums) {
    let thirdMax = -Infinity
    let secondMax = -Infinity
    let max = -Infinity
    
    for(const val of nums) {
      if(val === max || val === secondMax || val === thirdMax) {
        continue
      }
      if(val > max) {
        thirdMax = secondMax
        secondMax = max
        max= val
      } else if (val > secondMax) {
        thirdMax = secondMax
        secondMax = val
      } else if ( val > thirdMax) {
        thirdMax = val
      }
    }
    if(thirdMax === -Infinity) {
      thirdMax = max
    }
    return thirdMax
  };
  
  console.log(thirdMaxFn([1,2]))