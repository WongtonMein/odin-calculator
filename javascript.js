function add(a, b) { return a + b }

function subtract(a, b) { return a - b }

function multiply(a, b) { return a * b }

function divide(a, b) { return a / b }

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operate === "/") {
        return divide(a, b);
    }
};

let a;
let b;
let operator;

let display = document.getElementById("results");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
// const clear = document.getElementById("clear");
// const parentheses = document.getElementById("parentheses");
// const delete = document.getElementById("delete");
// const parentheses = document.getElementById("parentheses");
// const decimal = document.getElementById("decimal");
const enter = document.getElementById("enter");

