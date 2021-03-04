function processRequest(request) {
    console.log(request);
    const requests = {
        CALCULATE: "calculate",
        CLEAR: "clear"
    }

    let number1 = getElementById("number1");
    let number2 = getElementById("number2");
    let operator = getOperator();
    let resultText = getElementById("result");

    switch (request) {
        case requests.CALCULATE:
            calculate(number1.value, number2.value, operator, resultText);
            break;
        case requests.CLEAR:
            clearText(number1, number2, operator, resultText);
            break;
        default:
            console.log("Something went wrong. Error code 101.");
    }


}

function displayResult(number1, number2, result, operator, resultText) {
    resultText.innerHTML = number1 + " " + operator + " " + number2 + " is " + result;
}

function calculate(number1, number2, operator, resultText) {
    const operators = {
        ADD: "add",
        SUBSTRACT: "subtract",
        MULTIPLY: "multiply",
        DIVIDE: "divide"
    }

    if (operator == false) {
        alert("Please select an operator!");
    }  else if (validateNumber(number1) == false || validateNumber(number2) == false) {
        alert("Please enter a number");
    }else {
        let result = processCalculatation(operators, operator, number1, number2);
        displayResult(number1, number2, result, operator.value, resultText);
    }
}

function processCalculatation(operators, operator, number1, number2) {

    switch(operator.value) {
        case operators.ADD:
            return number1 + number2;
        case operators.SUBSTRACT:
            return number1 - number2;
        case operators.MULTIPLY:
            return number1 * number2;
        case operators.DIVIDE:
            if (number2 == 0) {
                return "Stop! You are violating the law! You cannot divide by 0.";
            } else {
                return number1 / number2;
            }
        default:
            return "Something went wrong. Error code 201.";
    }
}

function getOperator() {
    let operators = document.getElementsByClassName("operator");
    
    for (let operator of operators) {
        if(operator.checked == true) {
            return operator;
        }
    }
    return false;
}

function clearText(number1, number2, operator, resultText) {
    number1.value = "";
    number2.value = "";
    number1.focus();
    
    operator.checked = false;
    resultText.innerHTML = "Result";

}

function validateNumber(number) {
    return !(isNaN(number));
}

function getElementById(element) {
    return document.getElementById(element);
}

