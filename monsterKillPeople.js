const string = "PPPPPP@PPP@PP$PP";

function monsterKillPeople(str) {
   const res = [] 
  //First split at @
    const newStrArr = str.split("@");
  // Split at $
  for(const value of newStrArr) {
    if(value.includes('$')) {
        const newDolArr = value.split('$')
        res.push(...newDolArr)
    } else {
        res.push(value)
    }
  }
  let min = res[0].length
  for(let str of res) {
    if(str.length < min) {
        min = str.length
    }
  }

  return min
}

monsterKillPeople(string);
