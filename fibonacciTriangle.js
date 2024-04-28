function generateFibonacciTriangle(rows) {
    let triangle = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            row.push(fibonacci(j));
        }
        triangle.push(row);
    }

    return triangle;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Function to display the triangle
function displayTriangle(triangle) {
    for (let row of triangle) {
        console.log(row.join(" "));
    }
}

// Example usage:
const rows = 5;
const fibonacciTriangle = generateFibonacciTriangle(rows);
console.log("Fibonacci Triangle:");
displayTriangle(fibonacciTriangle);
