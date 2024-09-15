const MAX_LENGTH = 10;
let num1 = "";
let num2 = "";
let operator = "";

let displayValue = document.querySelector(".input");
let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    const input = event.target.id;
    if (!isNaN(input)) {
        if (input !== "0" || displayValue.textContent !== "0") {
            displayValue.textContent += input;
        }
    } else if (input === ".") {
        if (displayValue.textContent === "") {
            displayValue.textContent = "0.";
        } else if (!isDecimal(displayValue.textContent)) {
            displayValue.textContent += input;
        }
    }else if (input === "AC") {
        clear();
    } else if (input === "DEL") {
        displayValue.textContent = displayValue.textContent.slice(0, -1);
    } else if (input === "+/-") {
        const value = parseInt(displayValue.textContent);
        displayValue.textContent = -value;
    } else if (input === "=") {
        if (operator !== "") {
            num2 = displayValue.textContent;
            displayValue.textContent = operate(num1, num2, operator);
            if (displayValue.textContent.length > MAX_LENGTH) {
                displayValue.textContent = displayValue.textContent.slice(0, MAX_LENGTH);
            }
            operator = "";
            newInput();
        }
    }
    else {
        if (operator !== "") {
            num2 = displayValue.textContent;
            displayValue.textContent = operate(num1, num2, operator);
        }
        num1 = displayValue.textContent;
        operator = input;
        clear();
    }
})

function clear() {
    displayValue.textContent = "";
}

function newInput() {
    buttons.addEventListener("click", (event) => {
        const input = event.target.id;
        if (!isNaN(input)) {
            displayValue.textContent = input;
        } else if (input === ".") {
            displayValue.textContent = "0.";
        }
    }, {once: true});
}

function isDecimal(string) {
    return string.includes(".");
}

function add(a, b) { return parseFloat(a) + parseFloat(b); }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);            
    }
}