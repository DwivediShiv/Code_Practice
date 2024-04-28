const requests = ["item1", "item2", "item3", "item1", "item3"];

function mostRecentRequest(req, k) {
    const res = new Set()

    while(res.size !== k) {
        res.add(req.pop())
    }

    return [...res]
}

console.log(mostRecentRequest(requests, 3))
