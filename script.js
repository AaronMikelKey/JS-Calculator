//global variables for display and calculations
var userDisplay = document.getElementById("display").querySelector("span").innerHTML;
var operator;
var num1;
var num2;
var result;

//basic operate function for calculating inputs
const operate = function(operator, num1, num2) {
    if (operator === "+") {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === "-") {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "*") {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === "/") {
        result = parseFloat(num1) / parseFloat(num2);
    }
    console.log(result);
}
//function for clearing display, operator, num1, and num2
document.getElementById("buttonArea").querySelector(".clear").addEventListener("click", function() {
    document.getElementById("display").querySelector("span").innerHTML = "0";
    document.getElementById("displayWarning").querySelector("span").innerHTML = "";
    userDisplay = "0";
    operator = undefined;
    num1 = undefined;
    num2 = undefined;
});

//function for appending button press to user display
var numInputs = document.getElementById("buttonArea").querySelectorAll(".number");
for (let i=0;i<numInputs.length;i++) {
    numInputs[i].addEventListener("click", function() {
        if (userDisplay === "0" || userDisplay === "") {
            document.getElementById("display").querySelector("span").innerHTML = this.value;
            userDisplay = this.value;
        } else if (userDisplay.length<25) {
        document.getElementById("display").querySelector("span").innerHTML += this.value;
        userDisplay += this.value;
        } else {
            document.getElementById("displayWarning").querySelector("span").innerHTML = "Overflow";
        }
    })
}

//function for setting operator and num1
var opInputs = document.getElementById("buttonArea").querySelectorAll(".operator");
for (let i=0;i<opInputs.length;i++) {
    opInputs[i].addEventListener("click", function() {
        if (operator === undefined && operator != "=" && num1 === undefined) {
            num1 = parseFloat(userDisplay);
            operator = this.value;
            document.getElementById("display").querySelector("span").innerHTML = "";
        } else if (operator != undefined && operator != "=" && num1 != undefined) {
            num2 = parseFloat(userDisplay);
            operate(operator, num1, num2);
            userDisplay = result;
            num2 = undefined;
            document.getElementById("display").querySelector("span").innerHTML = userDisplay;
        }
    }) 
}
