var sortArrayByParity = function(nums) {
    let evenIndex = 0  
    for(const i in nums) {
      if(nums[i] % 2 === 0) {
        const curr = nums[evenIndex]
        nums[evenIndex] = nums[i]
        nums[i] = curr
        evenIndex++
      }
    }
    return nums 
  };
  
  console.log(sortArrayByParity([0]))