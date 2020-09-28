//global variables for display and calculations
var userDisplay;
var operator;
var num1;
var num2;

//global array for calculator buttons
var btnArr = [];


//global regexp for capturing inputs
var opRegExp = /\D{1}/g;
var num1RegExp = /^\d+/g;
var num1RegExp = /\d+$/g;

//basic operate function for calculating inputs
const operate = function(operator, num1, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}
//function for clearing display
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("display").innerHTML = "";
});

//function for appending button press to user display
