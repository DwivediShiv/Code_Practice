function largestDistance(str, char) {
    let firstIndex = 0
    let lastIndex = 0
    let res= new Set()

    for(const index in str) {
        if(!firstIndex && str[index] === char) {
            firstIndex = index
            break
        }
    }

    for(let i = str.length; i > 0; i--) {
        if(!lastIndex && str[i] === char) {
            lastIndex = i
            break
        }
    }
    
    for(let i = +firstIndex + 1; i < lastIndex; i++) {
        if(str[i] !== " " && str[i] !== char) {
            res.add(str[i])
        }
    }
    return res.size || -1
}


console.log(largestDistance('my name is granar', 'a'))
// 7
console.log(largestDistance('the capital of minnesota is saint paul', 'y'))
// -1