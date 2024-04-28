function fibonacciSeries(n) {
    const res = [];
    res[0] = 1;
    if (n === 1) {
      return res;
    }
  
    res[1] = 1;
  
    if (n === 2) {
      return res;
    }
  
    for (let i = 2; i < n; i++) {
      res[i] = res[i - 2] + res[i - 1];
    }
  
    console.log(res);
  }
  
  fibonacciSeries(10)