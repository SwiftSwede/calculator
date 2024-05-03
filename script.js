"use strict";

//Set variables
let num1 = "";
let num2 = "";
let operator;
let result = 0;
let firstNumber = true;

//Create variables for the different buttons and add on click event listeners to them which perform a function
const number = document.querySelectorAll(".number");
document.getElementById("screen").innerHTML = "0";
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    document.getElementById("screen").innerHTML = determineFirst(
      e.target.innerHTML
    );
  });
}

const decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", () => {
  if (document.getElementById("screen").innerHTML.includes("."))
    document.getElementById("screen").innerHTML = determineFirst("");
  else {
    document.getElementById("screen").innerHTML = determineFirst(".");
  }
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  manageNum();
  operator = add;
});

const subtractButton = document.getElementById("subtract");
subtractButton.addEventListener("click", () => {
  manageNum();
  operator = subtract;
});

const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", () => {
  manageNum();
  operator = multiply;
});

const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", () => {
  manageNum();
  operator = divide;
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
  if (!num1 && result) num1 = result;
  if (num2) {
    firstNumber = true;
    result = operate(+num1, +num2, operator);
    console.log(`first:${num1}, second: ${num2}, result: ${result}`);
    document.getElementById("screen").innerHTML = result;
    num1 = "";
    num2 = "";
    operator = 0;
  }
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  clearScreen();
});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
  let string = document.getElementById("screen").innerHTML.split("");
  string.pop();
  document.getElementById("screen").innerHTML = Number(string.join(""));
  if (firstNumber) {
    num1 = Number(string.join(""));
  } else if (!firstNumber) {
    num2 = Number(string.join(""));
  }
});

//Add keyDown event listeners to the application
document.addEventListener("keydown", function (e) {
  if (e.key == "1") {
    document.getElementById("screen").innerHTML = determineFirst(1);
  }
  if (e.key == "2") {
    document.getElementById("screen").innerHTML = determineFirst(2);
  }
  if (e.key == "3") {
    document.getElementById("screen").innerHTML = determineFirst(3);
  }
  if (e.key == "4") {
    document.getElementById("screen").innerHTML = determineFirst(4);
  }
  if (e.key == "5") {
    document.getElementById("screen").innerHTML = determineFirst(5);
  }
  if (e.key == "6") {
    document.getElementById("screen").innerHTML = determineFirst(6);
  }
  if (e.key == "7") {
    document.getElementById("screen").innerHTML = determineFirst(7);
  }
  if (e.key == "8") {
    document.getElementById("screen").innerHTML = determineFirst(8);
  }
  if (e.key == "9") {
    document.getElementById("screen").innerHTML = determineFirst(9);
  }
  if (e.key == "0") {
    document.getElementById("screen").innerHTML = determineFirst(0);
  }
  if (e.key == ".") {
    if (document.getElementById("screen").innerHTML.includes("."))
      document.getElementById("screen").innerHTML = determineFirst("");
    else {
      document.getElementById("screen").innerHTML = determineFirst(".");
    }
  }
  if (e.key == "+") {
    manageNum();
    operator = add;
  }
  if (e.key == "-") {
    manageNum();
    operator = subtract;
  }
  if (e.key == "*") {
    manageNum();
    operator = multiply;
  }
  if (e.key == "/") {
    manageNum();
    operator = divide;
  }
  if (e.key == "=") {
    if (!num1 && result) num1 = result;
    if (num2) {
      firstNumber = true;
      result = operate(+num1, +num2, operator);
      console.log(`first:${num1}, second: ${num2}, result: ${result}`);
      document.getElementById("screen").innerHTML = result;
      num1 = "";
      num2 = "";
      operator = 0;
    }
  }
  if (e.key == "Backspace") {
    let string = document.getElementById("screen").innerHTML.split("");
    string.pop();
    document.getElementById("screen").innerHTML = Number(string.join(""));
    if (firstNumber) {
      num1 = Number(string.join(""));
    } else if (!firstNumber) {
      num2 = Number(string.join(""));
    }
  }
});

//Create math functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

const operate = function (num1, num2, operation) {
  const result = operation(num1, num2);
  const roundedResult = Math.round(result * 1000000) / 1000000;
  return roundedResult;
};

//Determine if first or second number
const determineFirst = function (number) {
  return firstNumber ? (num1 += number) : (num2 += number);
};

//Dp something based on what is being inputted
const manageNum = function () {
  if (!num1) {
    num1 = result;
    firstNumber = false;
  } else {
    firstNumber = false;
    if (num2) {
      result = operate(+num1, +num2, operator);
      console.log(`first:${num1}, second: ${num2}, result: ${result}`);
      document.getElementById("screen").innerHTML = result;
      num1 = "";
      num2 = "";
    }
  }
};

//Clear the screen
const clearScreen = function () {
  num1 = "";
  num2 = "";
  result = "";
  document.getElementById("screen").innerHTML = 0;
  operator = 0;
};
