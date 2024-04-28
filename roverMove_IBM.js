function roverMove(matrixSize, cmds) {
    let result = 0;
    for (let i = 0; i < cmds.length; i++) {
      result = process(cmds[i], matrixSize, result);
    }
    return result;
  }
  
  function process(cmd, n, current) {
    if (cmd === "DOWN") {
      if (current < n * n - n) {
        current += n;
      }
    } else if (cmd === "UP") {
      if (current >= n) {
        current -= n;
      }
    } else if (cmd === "RIGHT") {
      if ((current + 1) % n !== 0) {
        current++;
      }
    } else if (cmd === "LEFT") {
      if (current % n !== 0) {
        current--;
      }
    }
    return current;
  }
  
  const cmds = ["RIGHT","UP","DOWN","LEFT","DOWN","DOWN"];
  console.log(roverMove(4, cmds));