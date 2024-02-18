let input1 = 0;
let input2 = 0;
let operator = "";
let lastOperator = "";
let lastInput = "";

let displayValue = "";
let hiddenValue = "";
let displayText = document.querySelector("#displayText")

for (let i = 0; i < 10; i++) {
    let numButton = document.querySelector("#btn" + i);
    numButton.addEventListener("click", () => PressNumber(i));
}

function PressNumber(index){
    displayValue += ""+index;
    displayText.textContent = displayValue;
}

let addButton = document.querySelector("#btnPlus");
addButton.addEventListener("click", () => PressOperator("+"))
let minusButton = document.querySelector("#btnMinus");
minusButton.addEventListener("click", () => PressOperator("-"))
let multiplyButton = document.querySelector("#btnMutliply");
multiplyButton.addEventListener("click", () => PressOperator("*"))
let divideButton = document.querySelector("#btnDivide");
divideButton.addEventListener("click", () => PressOperator("/"))

function PressOperator(index){
    if (!(operator === "")){
        PressEquals();
    }

    operator = index;
    hiddenValue = displayValue;
    displayValue = "";
}

let equalsButton = document.querySelector("#btnEquals");
equalsButton.addEventListener("click", () => PressEquals());

function PressEquals(){
    if (operator === ""){
        if (!(lastOperator === "")){
            operator = lastOperator;
            hiddenValue = displayValue;
            displayValue = lastInput;
        }
        else
            return;
    }

    input1 = +hiddenValue;
    input2 = +displayValue;
    lastInput = displayValue;
    displayValue = Operate();
    displayText.textContent = Math.round(displayValue * 100) / 100 ;
    lastOperator = operator;
    operator = "";
}

let clearButton = document.querySelector("#btnAC");
clearButton.addEventListener("click", () => PressClear());

function PressClear(){
    input1 = 0;
    input2 = 0;
    operator = "";
    lastOperator = "";
    lastInput = "";

    displayValue = "";
    hiddenValue = "";
    displayText.textContent = "0";
}


function Add(num1, num2){
    return num1 + num2;
}

function Subract(num1, num2){
    return num1 - num2;
}

function Multiply(num1, num2){
    return num1*num2;
}

function Divide(num1, num2){
    if (num2 == 0) return "error";

    return num1/num2;
}

function Operate(){
    let result = "error";
    switch (operator){
        case "+":
            result = Add(input1, input2);
            break;
        case "-":
            result = Subract(input1, input2);
            break;
        case "*":
            result = Multiply(input1, input2);
            break;
        case "/":
            result = Divide(input1, input2);
            break;
    }
    return result
}


addEventListener("keypress", (event) => {
    switch (event.key){
        case "1":
            PressNumber(1);
            break;
        case "2":
            PressNumber(2);
            break;
        case "3":
            PressNumber(3);
            break;
        case "4":
            PressNumber(4);
            break;
        case "5":
            PressNumber(5);
            break;
        case "6":
            PressNumber(6);
            break;
        case "7":
            PressNumber(7);
            break;
        case "8":
            PressNumber(8);
            break;
        case "9":
            PressNumber(9);
            break;
        case "0":
            PressNumber(0);
            break;
        case "+":
            PressOperator("+");
            break;
        case "-":
            PressOperator("-");
            break;
        case "*":
            PressOperator("*");
            break;
        case "/":
            PressOperator("/");
            break;
        case "=":
        case "Enter":
            PressEquals();
            break; 
    }
});