var removeDuplicates = function(nums) {
    let  uniqueNum=1;
  
   for(let i=1;i<nums.length;i++){
       if(nums[i]!==nums[i-1]){
        console.log('** i', i)
          console.log('*** before', nums)
          nums[uniqueNum++]=nums[i]
          console.log('*** after', nums)
       }
   }
   console.log(nums)
   return uniqueNum;
   };
  
  removeDuplicates( [0,0,1,1,1,2,2,3,3,4])