const a = {
    name: "Shiva",
    address: {
        line1: "line1 add",
        line2: "line2 add",
        city: "gwalior"
    },
    office: {
        name: "Nag",
        address: {
            line1: "line1 off add",
            line2: "line2 off add",
            city: "gurugram"
        }
    }
}

const res = {}
function flatMap(obj, parent) {
    for (const key in obj) {
        const newKey = parent + "_" + key
        if (typeof obj[key] === "object") {            
             flatMap(obj[key], newKey)
        } else {            
            res[newKey] = obj[key]
        }        
    }    
}

flatMap(a, 'a')
console.log(res)
