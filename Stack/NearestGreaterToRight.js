/**
 * Nearest Greater to Right or Next Largest Element
 */

const a = [1, 3, 2, 4];

function nearestGR(arr, n) { 
  const stack = [];
  const res = [];
  for (let i = n-1; i >= 0; i--) {
    if (stack.length == 0) {
      res.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      res.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        res.push(stack[stack.length - 1]);
      } else {
        res.push(-1);
      }
    }
    stack.push(arr[i]);
  }
  return res.reverse();
}

console.log(nearestGR(a, 4));
