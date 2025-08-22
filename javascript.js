function add(a, b) {
    console.log( a + b )
}

function subtract(a, b) {
    console.log( a - b )
}

function multiply(a, b) {
    console.log( a * b )
}

function divide(a, b) {
    console.log( a / b )
}

function operate(a, b, operator) {
    if (operator === "+") {
        add(a, b);
    } else if (operator === "-") {
        subtract(a, b);
    } else if (operator === "*") {
        multiply(a, b);
    } else if (operate === "/") {
        divide(a, b);
    }
};