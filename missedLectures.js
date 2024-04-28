function missedLectures(numChap, s, e) {
    const chap = [];
    const missedChap = new Set();
  
    for (let i = 0; i <= e; i++) {
      chap.push(i % numChap);
    }
  
    for (let i = s; i <= e; i++) {
      missedChap.add(chap[i]);
    }
  
    return missedChap.size;
  }
  
  console.log(missedLectures(4, 3, 5));
  