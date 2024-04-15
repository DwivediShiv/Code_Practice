var validMountainArray = function (arr) {
    let peakReached = false;
    let i =1;
  
    if(arr.length < 3) {
      return false
    }
  
    if(arr[0] > arr[1]) {
      return false
    }
  
    console.log('** while' )
    while(!peakReached && arr[i] != undefined) {
      console.log('**1while ', arr[i])
      if(arr[i] == arr[i-1]) {
        return false
      } else if(arr[i] < arr[i-1]) {
        console.log('** else if', arr[i])
        peakReached = true
      }
      console.log('** else', arr[i])
      i++    
    }
    
    if(!peakReached) {
      return false
    }
  
    while(peakReached) {
      console.log('**2while ', arr[i])
      if(arr[i] >= arr[i-1] || arr[i] != undefined) {
        console.log('***2 if', arr[i])
        return false
      }
      i++
    }
    return true
  };
  
  console.log(validMountainArray([0,3,2,1]));
  