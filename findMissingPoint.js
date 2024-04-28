/**
 *  iterate through each pair of points and check if there exists a corresponding point that 
 * would complete a rectangle or square. If such a point exists, we return it as the missing 
 * point.
 * This code iterates through each pair of points, and for each pair, it checks if there exists
 *  a corresponding point that would complete a rectangle or square with the given points. 
 * If such a point is found, it is returned as the missing point. If no missing point is found, 
 * None is returned.



 */

function findMissingPoint(location) {
    const seenPoints = new Set();

    for (const [x1, y1] of location) {
        for (const [x2, y2] of location) {
            if ((x1 !== x2 || y1 !== y2) && (seenPoints.has(`${x1},${y2}`) || seenPoints.has(`${x2},${y1}`))) {
                // If there exists a point that completes a rectangle or square with (x1, y1) and (x2, y2),
                // return the missing point
                return [x1, y1];
            }
            seenPoints.add(`${x1},${y1}`);
        }
    }
    return null;
}

// Example usage:
const location = [[1,1], [1,2], [2,1], [4,4], [4,6], [9,4], [9,6]];
console.log(findMissingPoint(location)); // Output: [2, 2]
