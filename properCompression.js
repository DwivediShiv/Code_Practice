const str = "a3b5c2a2";

function properCompression(str) {
  let lastChar = "";
  let res = "";
  for (const value of str) {
    const number = parseInt(value);
    if (isNaN(number)) {
      lastChar = value;
    } else {
      res = res.padEnd(res.length + number, lastChar);
    }
  }

  console.log(res);
}

properCompression(str);
