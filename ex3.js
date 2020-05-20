/**
* Created by Madalina Marian on 12/05/2020
*/

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.

// BONUS: Make a program that can subtract, multiply, and also divide!

// function clickNum() {
// 	var firstNumStr = prompt("Enter first number");
// 	var secondNumStr = prompt("Enter second number");
// 	var operater = prompt("Operator sign");

var firstNumber = prompt("Enter first number");
var secondNumber = prompt("Enter second number");
var operator = prompt("Operator sign");
var result;

function validateStrings()
{
    if (operator == "/" && secondNumber == "0")
    {
        alert("Division by zero!");
        return false;
    }
    return true;
}

if (validateStrings())
{
    switch(operator)
    {
        case "+":
            result = parseInt(firstNumber) + parseInt(secondNumber);
            alert("Result = " + result);
        break;

        case "-":
            result = parseInt(firstNumber) - parseInt(secondNumber);
            alert("Result = " + result);
        break;

        case "*":
            result = parseInt(firstNumber) * parseInt(secondNumber);
            alert("Result = " + result);
        break;

        case "/":
            result = parseInt(firstNumber) / parseInt(secondNumber);
            alert("Result = " + result);
        break;

        default:
            alert("Operation not supported!");
        break;
    }
}