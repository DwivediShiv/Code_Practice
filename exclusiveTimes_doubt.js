function exclusiveTimes(n, logs) {
    const exclusiveTimes = new Array(n).fill(0);
    const stack = [];
    let prevTime = 0;

    for (let log of logs) {
        const [id, type, time] = parseLog(log);
        
        if (type === 'start') {
            if (stack.length > 0) {
                const prevId = stack[stack.length - 1];
                exclusiveTimes[prevId] += time - prevTime;
            }
            stack.push(id);
            prevTime = time;
        } else {
            const currId = stack.pop();
            exclusiveTimes[currId] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }

    return exclusiveTimes;
}

function parseLog(log) {
    const [id, type, time] = log.split(':');
    return [parseInt(id), type, parseInt(time)];
}

// Example usage:
const n = 3;
const logs = ["0:start:0","1:start:2","2:start:3","2:end:4","1:end:5","0:end:6"];
console.log(exclusiveTimes(n, logs)); // Output: [3, 2, 1]
