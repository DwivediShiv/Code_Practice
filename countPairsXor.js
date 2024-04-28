const n = 4;
const arr = [4, 3, 5, 2];


function countPairs(arr) {
    let count = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((arr[i] ^ arr[j]) > (arr[i] & arr[j])) {
                count++;
            }
        }
    }

    return count;
}

console.log(countPairs(arr))