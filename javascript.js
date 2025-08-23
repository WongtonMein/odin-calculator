function addFunc(a, b) { return a + b };

function subtractFunc(a, b) { return a - b };

function multiplyFunc(a, b) { return a * b };

function divideFunc(a, b) { return a / b };

function operateFunc(a, b, operator) {
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

const buttonContainer = document.querySelector(".button-container");
const buttons = document.querySelector(".buttons");

// number buttons
const numbers = document.querySelector(".number");
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

// function buttons
const operators = document.querySelector(".operator");
const enter = document.getElementById("enter");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
// const clear = document.getElementById("clear");
// const parentheses = document.getElementById("parentheses");
// const delete = document.getElementById("delete");
// const parentheses = document.getElementById("parentheses");
// const decimal = document.getElementById("decimal");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    
    switch (target.id) {
        case "one":
            a += "1";
            display.textContent += "1";
            break;
        case "two":
            a += "2";
            display.textContent += "2";
            break;
        case "three":
            a += "3";
            display.textContent += "3";
            break;
        case "four":
            a += "4";
            display.textContent += "4";
            break;
        case "five":
            a += "5";
            display.textContent += "5";
            break;
        case "six":
            a += "6";
            display.textContent += "6";
            break;
        case "seven":
            a += "7";
            display.textContent += "7";
            break;
        case "eight":
            a += "8";
            display.textContent += "8";
            break;
        case "nine":
            a += "9";
            display.textContent += "9";
            break;
        case "zero":
            a += "0";
            display.textContent += "0";
            break;
        case "add":
            if(a != "") {
                operator = "+";
                display.textContent += " + ";
                b = a
            };
            break;
        case "subtract":
            if(a != "") {
                operator = "-";
                display.textContent += " - ";
                b = a
            };
            break;
        case "multiply":
            if(a != "") {
                operator = "*";
                display.textContent += " * ";
                b = a
            };
            break;
        case "divide":
            if(a != "") {
                operator = "/";
                display.textContent += " / ";
                b = a
            };
            break;
    }
});




// add.addEventListener("click", () => {
//     if (a != "") {
//         operator = "+";
//         display.textContent += "+";
//         b = a
//     }
// })