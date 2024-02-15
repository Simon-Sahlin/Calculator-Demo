let input1 = 15;
let input2 = 5;
let operator = "";

let displayValue = "";
let hiddenValue = "";
let displayText = document.querySelector("#displayText")
displayText.textContent = "abo";

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
    operator = index;
    hiddenValue = displayValue;
    displayValue = "";
}

let equalsButton = document.querySelector("#btnEquals");
equalsButton.addEventListener("click", () => PressEquals());

function PressEquals(){
    input1 = +hiddenValue;
    input2 = +displayValue;
    displayValue = Operate();
    displayText.textContent = displayValue;

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
    result = "error";
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