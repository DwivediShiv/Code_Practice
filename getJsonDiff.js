const json1 = { hello: "world", hi: "hello", you: "me", top: "1" };
const json2 = { hello: "world", hi: "helloo", you: "me" };

function getJsonDiff(j1, j2) {
  const res = [];
  for (const key in j1) {
    if (j1[key] && j2[key] && j1[key] !== j2[key]) {
      res.push(key);
    }
  }

  return res;
}

console.log(getJsonDiff(json1, json2));
