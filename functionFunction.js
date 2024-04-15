const sum = (a) => {  
    return (b) => {
        if(b) {
            return sum(a+b)
        }

        return a
    }
}
console.log(sum(1)(2)(3)(4)())
// sum(1)(2)(3)