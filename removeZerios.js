const removeZeros = (arr) => {
    let indexNumber = 0
    for(const i in arr) {
      if(arr[i] != 0) {
        arr[indexNumber] = arr[i]
        indexNumber++
      }
    }
    arr.length = indexNumber
    
    return arr
  } 