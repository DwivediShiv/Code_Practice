const arr = [2, 1, 3];
/**
 * first element then 0
 * second 1-2 = -1
 * third (3-1) + (3-2) = 3
 *  
 */

function arrayChallenge(arr) {
  const res = [];
  for (const index in arr) {
    let count = 0;
    if (index !== 0) {
      let currentSubIndex = index - 1;
      while (currentSubIndex >= 0) {
        count = count + (arr[index] - arr[currentSubIndex]);
        currentSubIndex--;
      }
    }
    res.push(count);
  }

  return res;
}

console.log(arrayChallenge(arr));
