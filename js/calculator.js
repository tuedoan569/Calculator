/************************************************************/
/* Author:          Tue Doan                                */
/* Creation Date:   Feb 28, 2021                            */
/* Due Date:        Mar 04, 2021                            */
/* Course:          Miles Training Lab                      */
/* Assignment:      Project #3                              */
/* Filename:        calculator.js                           */
/* Purpose: Simple calculator program with 2 numbers.       */
/************************************************************/

/**
 * 
 * Hanlde the request when user clicks on the button.
 * 
 * @param {string} request which button the request from.
 */
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

/**
 * 
 * Display the result to the screen.
 * 
 * @param {*} number1 The user first input.
 * @param {*} number2 The user second input.
 * @param {*} result The result of calculation based on user inputs and selection.
 * @param {*} operator The user selected operator.
 * @param {*} resultText The result object which holds the result to be displayed to the screen.
 */
function displayResult(number1, number2, result, operator, resultText) {
    resultText.innerHTML = number1 + " " + operator + " " + number2 + " is " + result;
}

/**
 * 
 * Handle error checking before proceed with the calculation.
 * 
 * @param {*} number1 The user first input.
 * @param {*} number2 The user second input.
 * @param {*} operator The user selected operator.
 * @param {*} resultText The result object which holds the result to be displayed to the screen.
 */
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

/**
 * 
 * Process the calculation based on the user inputs and selection 
 * and return the result or any error that encounters
 * 
 * @param {*} operators The key-value object that contains all the operators.
 * @param {*} operator The user selected operator.
 * @param {*} number1 The user first input.
 * @param {*} number2 The user second input.
 */
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

/**
 * Return operator object that user selects, otherwise return false
 */
function getOperator() {
    let operators = document.getElementsByClassName("operator");
    
    for (let operator of operators) {
        if(operator.checked == true) {
            return operator;
        }
    }
    return false;
}

/**
 * 
 * Clear all inputs, selection, return to default value, and focus cursor on first input box.
 * 
 * @param {*} number1 The first user input.
 * @param {*} number2 The sencond user input.
 * @param {*} operator The user selected operator.
 * @param {*} resultText The result object which holds the result to be displayed to the screen.
 */
function clearText(number1, number2, operator, resultText) {
    number1.value = "";
    number2.value = "";
    number1.focus();
    
    operator.checked = false;
    resultText.innerHTML = "Result";

}

/**
 * 
 * Return true if variable is a number, otherwise false.
 * 
 * @param {number} number The number being evaluated.
 */
function validateNumber(number) {
    return !(isNaN(number));
}

/**
 * 
 * Get element object from the string id.
 * 
 * @param {string} The string id.
 */
function getElementById(element) {
    return document.getElementById(element);
}

