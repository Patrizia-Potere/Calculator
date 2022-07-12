// Initializing variable, result holding the final outcome 
// and regValue to check if input are numbers

var regValue = /^[0-9]*$/;

// While loop to ask user input till answer is no

do {
    var result=0;
    var firstValue = prompt("Please insert the first value");
    if (firstValue.match(regValue)) {
        var operator = prompt("Please insert the operator");
            if (operator !== "sin" && operator !== "cos" && operator !== "tan") {
                var secondValue = prompt("Please insert the second value");
                if (secondValue.match(regValue)) {
                    Operation(operator);
                    console.log(`${firstValue} ${operator} ${secondValue} = ${result}`); //printing result
                } else console.log("Second value is not valid");   //if input is not a number
            } else {
                Operation(operator);
                console.log(`${operator} (${firstValue}) = ${result}`);   //printing trigonometry result
            };
    } else console.log("First value is not valid");            //if input in not a number
    var answer = prompt("Would you like to do another calculation? yes|no"); 
} 
while (answer!=="no");

// Operation function with case-switch to call a related function based on the operator

function Operation(op) {
    switch (op) {
        case "+":
            result = Add(firstValue,secondValue);
            break;
        case "-":
            result = Sub(firstValue,secondValue);
            break;
        case "/":
            result = Divide(firstValue,secondValue);
            break;
        case "*":
            result = Molt(firstValue,secondValue);
            break;
        case "^":
            result = Caret(firstValue,secondValue);
            break;
        case "sin":
            result = Sin(firstValue);
            break;
        case "cos":
            result = Cos(firstValue);
            break;
        case "tan":
            result = Tan(firstValue);
            break;
        default:
            console.log("Operator is not valid");
    }
}

// Addition
function Add(a,b) {
    return parseFloat(a)+ parseFloat(b); //using ParseFloat to turn string into number 
                                         //to avoid concatenation
}
// Subtraction
function Sub(a,b) {
    return a-b;
}
// Division
function Divide(a,b) {
    return (a/b).toFixed(2);    // round number with two digits for division
}
// Moltiplication
function Molt(a,b) {
    return a*b;
}
// To the power
function Caret(a,b) {
    return a**b;
}
// Sin
function Sin(a) {
    return Math.sin(a*Math.PI/180);        //result in radians
}
// Cos
function Cos(a) {
    return Math.cos(a *Math.PI/100);
}
// Tan
function Tan(a) {
    return Math.tan(a*Math.PI/100);
}

