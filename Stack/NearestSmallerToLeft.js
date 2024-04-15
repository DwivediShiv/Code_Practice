const a = [4, 5, 2, 10, 8];

function nearestSL(arr, n) {
  const stack = [];
  const res = [];

  for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      res.push(stack[stack.length-1]);
    } else if(stack.length >0 && stack[stack.length-1] > arr[i]) {
        while(stack.length >0 && stack[stack.length-1] > arr[i]) {
            stack.pop()
        }

        if(stack.length === 0) {
            res.push(-1)
        } else {
            res.push(stack[stack.length -1])
        }
    }
    stack.push(arr[i])
  }

  return res
}

console.log(nearestSL(a, 5))