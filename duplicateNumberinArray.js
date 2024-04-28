function findDuplicates(arr, n) {
    let newObj = {}
    let res = []
    for(const value of arr) {
        if(newObj[value]) {
            newObj[value] = newObj[value] + 1
        } else {
            newObj[value] = 1
        }
    }

    for(const key in newObj) {
        if(newObj[key] > 1) {
            res.push(key)
        }
    }

    return res
}

const arr = [4, 4, 7, 8, 8, 9];
// [4,8]
const result = findDuplicates(arr, arr.length);
console.log(result)