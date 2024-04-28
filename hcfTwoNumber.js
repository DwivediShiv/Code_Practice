function hcsTwoNumber(n1, n2) {
  let min = Math.min(n1, n2);
  let res = 1

  for(let i = 1; i <= min; i++) {
      if(n1%i === 0 && n2 %i === 0) {
          res =  i
      }
  } 
  return res   
}

console.log(hcfTwoNumber(24, 36));
