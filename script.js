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
        if (operator === undefined && operator != "=" && num1 === undefined) { //if no operator has been set, = is not the operator, and num1 != some value
            num1 = parseFloat(userDisplay); //Set num1 to first entered value
            operator = this.value; //Set operator to entered operator
            userDisplay = ""; //clear userDisplay vairable
            document.getElementById("display").querySelector("span").innerHTML = ""; //clear user display
        } else if (operator != undefined && operator != "=" && num1 != undefined && num2 === undefined) { //if an operator has been set, = is not the operator, num1 = some value, and num2 != some value
            num2 = parseFloat(userDisplay); //num2 = second entered value
            operate(operator, num1, num2); //perform math on the two values
            userDisplay = result; //set userDisplay variable to the result of operate()
            num1 = result;  //set num1 to the result
            document.getElementById("display").querySelector("span").innerHTML = userDisplay; //set user display to userDisplay variable
        } else if (operator != undefined && operator != "=" && num1 != undefined && num2 != undefined) { //Second press of operator button without changing input
            operate(operator, num1, num2); //perform math on the two values
            userDisplay = result; //set userDisplay variable to the result of operate()
            num1 = result;  //set num1 to the result
            document.getElementById("display").querySelector("span").innerHTML = userDisplay; //set user display to userDisplay variable
        }
    }) 
}

//function for backspace button.  Removes last digit from user display unless the only digit is zero.
document.getElementById("backspace").addEventListener("click", function() {
    if (userDisplay != "") { //Shouldn't work after operator key is pressed before another input is added
        let arr = userDisplay.split(""); //splits user display value into array.
        console.log(arr + " arr before function");
        if (arr.length > 1) { //If user has added an input.  Won't work directly after operator key is pressed.
            arr.pop(); //remove last number added to input
            userDisplay = arr.join(""); //set userDisplay variable to the modified array
            document.getElementById("display").querySelector("span").innerHTML = userDisplay; //set user display to userDisplay variable
        } else if (arr.length = 1 && arr[0] != "0") { //if the only number present is not zero
            arr[0] = "0"; //set only number to zero
            userDisplay = arr.join(""); //set userDisplay variable to the modified array (i.e. zero)
            document.getElementById("display").querySelector("span").innerHTML = userDisplay; //set user display to userDisplay variable
        }
    }
});

//function for the sign change button.  Math.sign() works in all modern browsers but not in IE
document.getElementById("sign").addEventListener("click", function() {
    if (Math.sign(userDisplay) != 0 && Math.sign(userDisplay) != NaN) { //Shouldn't work if there is no input or if the number is zero
        userDisplay *= -1; //multiply userDisplay by negative, either changing it to negative or positive
        document.getElementById("display").querySelector("span").innerHTML = userDisplay; //set user display to userDisplay variable
    }
});