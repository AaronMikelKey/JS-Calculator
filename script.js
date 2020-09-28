//global variables for calculations
var operator;
var num1;
var num2;

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
