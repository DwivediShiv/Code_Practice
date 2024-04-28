const sampleInput = "796115110113721110141108"


function getPassword(str) {
    const res = []
    str = str.split('').reverse().join('')
    // 801141011127311011511697
    let number = ""
    for(let i = 0; i<str.length; i++) {
        number = number + str[i]
        number = parseInt(number)
        if(!(number< 65 && number !== 32) || (number > 90 && number<97) || (number > 122)) {
            res.push(String.fromCharCode(number))
            number = "" 
        } 
    }
    return res.join('')

}

console.log(getPassword(sampleInput))