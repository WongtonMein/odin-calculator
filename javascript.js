// #region --- variables
let firstValue = null;
let secondValue = null;
let operator = null;
let result = null;
let userInput = [];
let calculated = false;
const roundedDecimals = 4;
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
function addFunc(a, b) {
    return Math.round((a + b) * Math.pow(10, roundedDecimals)) / Math.pow(10, roundedDecimals)
};
function subtractFunc(a, b) {
    return Math.round((a - b) * Math.pow(10, roundedDecimals)) / Math.pow(10, roundedDecimals)
};
function multiplyFunc(a, b) {
    return Math.round((a * b) * Math.pow(10, roundedDecimals)) / Math.pow(10, roundedDecimals)
};
function divideFunc(a, b) { 
    if (b === 0) {
        clearValues();
        return "ERROR";
    }
    return Math.round((a / b) * Math.pow(10, roundedDecimals)) / Math.pow(10, roundedDecimals)
};
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
    userInput = [];
    displayResult.textContent = null;
};
function displayVariables() {
    console.log("-----");
    console.log(`firstValue is ${firstValue}`);
    console.log(`operator is ${operator}`);
    console.log(`secondValue is ${secondValue}`);
    console.log(`result is ${result}`);
    console.log(`userInput is ${userInput}`);
    console.log("-----");
};
function deleteLast() { // check again later
    deleteBtn.addEventListener("click", () => {
        userInput.pop();
        displayResult.textContent = userInput.join("");
    })
    displayVariables();
};
function calcValue(firstValue, secondValue, operator) {
    operateFunc(firstValue, secondValue, operator);
    displayResult.textContent = result;
    userInput.push(result);
    userInput = [userInput[userInput.length -1]];
    firstValue = result;
    secondValue = null;
    displayVariables();
};
// #endregion

// #region --- input processing
function processInput(userInput) {
    for (let input of userInput) {
        if (isNumber(input)) {
            processNumber(input);
        } else if (isDecimal(input)) {
            processDecimal(input);
        } else if (isOperator(input)) {
            processOperator(input);
        }
    }
    displayVariables();
};

function isNumber(input) {
    return "0123456789".includes(input);
};
function isDecimal(input) {
    return input === ".";
};
function isMinus(input) {
    return input === "-";
};
function isOperator(input) {
    return "+-*/".includes(input);
};

function processNumber(input) {
    if (calculated && operator === null) {
        clearValues()
        userInput.push(input)
        displayResult.textContent = userInput.join("");
    };
    calculated = false;
    if (firstValue === null && operator === null && secondValue === null) {
        firstValue = input;
    } else if (firstValue != null && operator === null && secondValue === null) {
        firstValue += input;
    } else if (firstValue != null && operator != null && secondValue === null) {
        secondValue = input;
    } else if (firstValue != null && operator != null && secondValue != null) {
        secondValue += input;
    }
    displayVariables();
};
function processDecimal(input) {
    if (firstValue === null) {
        firstValue = `0${input}`
    } else if (firstValue != null && operator === null && secondValue === null) {
        if (!firstValue.includes(".")) {
            firstValue += input;
        }
    } else if (firstValue != null && operator != null && secondValue === null) {
        secondValue = `0${input}`
    } else if (firstValue != null && operator != null && secondValue != null) {
        if (!secondValue.includes(".")) {
            secondValue += input;
        }
    }
};
function processOperator(input) {
    if (firstValue != null && operator != null & secondValue != null) {
        calcValue(firstValue, secondValue, operator);
        firstValue = result;
        secondValue = null;
        operator = input;
        userInput.push(input);
        displayResult.textContent = userInput.join("");
    // } else if (firstValue != null && operator != null & secondValue === null) {

    } else if (isMinus(input)) {
        if (firstValue === null) {
            firstValue = input;
        } else if (firstValue != null && operator === null) { // may not need this, drops to elseif block?
            operator = input;
        } else if (secondValue === null) {
            secondValue = input;
        }
    } else if (firstValue != null && operator === null) {
        operator = input;
        calculated = false;
    }
};
// #endregion

// #region --- display functions
function displayNumber() {
    numberBtn.forEach(number => {
        number.addEventListener("click", () => {
            input = number.textContent;
            userInput.push(input);
            displayResult.textContent = userInput.join("");

            processInput(input);
            console.log(`Last input: ${input}`);
        })
    })
};

function displayOperator() {
    operatorBtn.forEach(operate => {
        operate.addEventListener("click", () => {
            input = operate.textContent;

            if (operator === null) {
                userInput.push(input);
                displayResult.textContent = userInput.join("");
                processInput(input);
                console.log(`Last input: ${input}`);
            // checks last char is operator and second to last char is not operator
            } else if (isOperator(userInput[userInput.length - 1]) && !isOperator(userInput[userInput.length - 2])) {
                // if input is not minus, pops last char operator off userInput[]
                if (input === "-") {
                } else if ("+*/".includes(input)) {
                    userInput.pop();
                }
                // adds input to userInput[]
                userInput.push(input);
                // displays userInput values
                displayResult.textContent = userInput.join("");
                processInput(input);
                console.log(`Last input: ${input}`);
            } else if (isMinus(input) && isOperator(userInput[userInput.length - 2])) {
                userInput.push(input);
                displayResult.textContent = userInput.join("");
                processInput(input);
                console.log(`Last input: ${input}`);
            }
        })
    })
};

function displayDecimal() {
    decimalBtn.addEventListener("click", () => {
        input = decimalBtn.textContent;
        if (isDecimal(userInput[userInput.length - 1])) {
            userInput.pop();
        }
        userInput.push(input);
        displayResult.textContent = userInput.join("");

        processInput(input);
        console.log(`Last input: ${input}`);
    })
};
// #endregion

// equal button
equalBtn.addEventListener("click", () => {
    calcValue(firstValue, secondValue, operator);
    firstValue = result;
    secondValue = null;
    operator = null;
    calculated = true;
    displayVariables();
});

// clear button
clearBtn.addEventListener("click", () => {
    clearValues();
    displayVariables();
});

// main function
function main() {
    displayNumber();
    displayOperator();
    displayDecimal();
    deleteLast();
};

main();
