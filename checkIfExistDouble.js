var checkIfExist = function (arr) {
    const map = new Map()
    for (const num of arr) {
      if(map.has(num*2) || map.has(num/2)) {
        return true
      }
      map.set(num)
    }
    return false;
  };
  
  console.log(checkIfExist([4,2,5,3]));