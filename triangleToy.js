const triangleToy = ["2 2 1", "3 3 3", "3 4 5", "1 1 3"]

function triangleType(arr) {
    const res = []

    for(const value of triangleToy) {
        const [side1, side2, side3] = value.split(" ")
        if((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
            if(side1 === side2 && side2 === side3) {
                res.push('Equilateral')
            } else if(side1 === side2 || side2 === side3 || side1 === side3) {
                res.push('Isosceles')
            } else {
                res.push('None of these')   
            }
        } else {
            res.push('None of these')      
        }
        
    }

    return res
}

console.log(triangleType(triangleToy))