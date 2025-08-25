// #region --- variables
let firstValue = null;
let secondValue = null;
let operator = null;
let result = null;
// #endregion

// #region --- button inputs
const displayResult = document.getElementById("results");
const numberBtn = document.querySelectorAll(".number");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("enter");
const decimalBtn = document.getElementById("decimal");

// #region --- basic math funcs
function addFunc(a, b) { return a + b };
function subtractFunc(a, b) { return a - b };
function multiplyFunc(a, b) { return a * b };
function divideFunc(a, b) { 
    if (b === 0) {
        return "ERROR"
    } else {
    return a / b }};
// #endregion

// #region --- system funcs
function operateFunc(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case "+":
            result = addFunc(a, b);
            break;
        case "-":
            result = subtractFunc(a, b);
            break;
        case "*":
            result = multiplyFunc(a, b);
            break;
        case "/":
            result = divideFunc(a, b);
            break;
    }
};
function clearValues() {
    firstValue = null;
    secondValue = null;
    operator = null;
    result = null;
};
// #endregion

// #region --- input processing
function processInput(input) {
    if (isDigit(input)) {
        processDigit(input);
    } else if (isDecimal(input)) {
        processDecimal(input);
    } else if (isOperator(input)) {
        processOperator(input);
    }
};

function isDigit(input) { return "0123456789".includes(input); };
function isDecimal(input) { return input === "."; };
function isMinus(input) { return input === "-"; };
function isOperator(input) { return "+-*/".includes(input); };

function processDigit(input) {
    if (firstValue === null && operator === null && secondValue === null) {
        firstValue = input;
    } else if (firstValue != null && operator === null && secondValue === null) {
        firstValue += input;
    } else if (firstValue != null && operator != null && secondValue === null) {
        secondValue = input;
    } else if (firstValue != null && operator != null && secondValue != null) {
        secondValue += input;
    }
};

function processDecimal(input) {
    if (firstValue != null && operator === null && secondValue === null) {
        if (!firstValue.includes(".")) {
            firstValue += input;
        }
    } else if (firstValue != null && operator != null && secondValue != null) {
        if (!secondValue.includes(".")) {
            secondValue += input;
        }
    }
};

function processOperator(input) {
    if (isMinus(input) && firstValue === null && operator === null && secondValue === null) {
        firstValue = input;
    } else if (operator === null) {
        operator = input;
    }
};
// #endregion



// #region --- old number and function inputs
// const buttonContainer = document.querySelector(".button-container");
// const buttons = document.querySelector(".buttons");

// // number buttons
// const numbers = document.querySelectorAll(".number");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const zero = document.getElementById("zero");

// // function buttons
// const operators = document.querySelector(".operator");
// const enter = document.getElementById("enter");
// const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const multiply = document.getElementById("multiply");
// const divide = document.getElementById("divide");
// const clear = document.getElementById("clear");
// // const parentheses = document.getElementById("parentheses");
// // const delete = document.getElementById("delete");
// // const parentheses = document.getElementById("parentheses");
// // const decimal = document.getElementById("decimal");

// buttons.addEventListener("click", (event) => {
//     let target = event.target;
    
//     switch (target.id) {
//         case "one":
//             if (a === undefined) {
//                 a = "1";
//             } else {
//                 a += "1";
//             };
//             display.textContent += "1";
//             break;
//         case "two":
//             if (a === undefined) {
//                 a = "2";
//             } else {
//                 a += "2";
//             };            
//             display.textContent += "2";
//             break;
//         case "three":
//             if (a === undefined) {
//                 a = "3";
//             } else {
//                 a += "3";
//             };            
//             display.textContent += "3";
//             break;
//         case "four":
//             if (a === undefined) {
//                 a = "4";
//             } else {
//                 a += "4";
//             };            
//             display.textContent += "4";
//             break;
//         case "five":
//             if (a === undefined) {
//                 a = "5";
//             } else {
//                 a += "5";
//             };            
//             display.textContent += "5";
//             break;
//         case "six":
//             if (a === undefined) {
//                 a = "6";
//             } else {
//                 a += "6";
//             };            
//             display.textContent += "6";
//             break;
//         case "seven":
//             if (a === undefined) {
//                 a = "7";
//             } else {
//                 a += "7";
//             };            
//             display.textContent += "7";
//             break;
//         case "eight":
//             if (a === undefined) {
//                 a = "8";
//             } else {
//                 a += "8";
//             };            
//             display.textContent += "8";
//             break;
//         case "nine":
//             if (a === undefined) {
//                 a = "9";
//             } else {
//                 a += "9";
//             };            
//             display.textContent += "9";
//             break;
//         case "zero":
//             if (a === undefined) {
//                 a = "0";
//             } else {
//                 a += "0";
//             };           
//             display.textContent += "0";
//             break;
//         case "add":
//             if(a != "") {
//                 operator = "+";
//                 display.textContent += " + ";
//                 b = a;
//                 a = "";
//             };
//             break;
//         case "subtract":
//             if(a != "") {
//                 operator = "-";
//                 display.textContent += " - ";
//                 b = a;
//                 a = "";
//             };
//             break;
//         case "multiply":
//             if(a != "") {
//                 operator = "*";
//                 display.textContent += " * ";
//                 b = a;
//                 a = "";
//             };
//             break;
//         case "divide":
//             if(a != "") {
//                 operator = "/";
//                 display.textContent += " / ";
//                 b = a;
//                 a = "";
//                 // console.log(a);
//                 // console.log(operator);
//                 // console.log(b);
//             };
//             break;
//         case "enter":
//             if (a != "" && b != "" && operator != "") {
//                 result = operateFunc(a, b, operator);
//                 display.textContent = result;
//                 a = result;
//             };
//             break;
//         case "clear":
//             clearValues();
//             break;
//     }
//     console.log(`"${a}" is stored in a`);
//     console.log(`"${operator}" is stored in operator`);
//     console.log(`"${b}" is stored in b`);
// });
// #endregion