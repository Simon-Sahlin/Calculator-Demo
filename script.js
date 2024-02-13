let input1 = 15;
let input2 = 5;
let operator = "+";


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

console.log(Operate());