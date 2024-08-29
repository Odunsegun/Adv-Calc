//creating and styling the calculator
const calculator = document.createElement("div");
calculator.classList.add("calculator")
calculator.style.border ="1px solid black";

document.body.appendChild(calculator);

//create screen
const screen = document.createElement("input");
screen.type = "text";
screen.classList.add("screen");
calculator.appendChild(screen);


//button container
const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons-container");
calculator.appendChild(buttonsContainer);

// Buttons
const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "^", "+",
    "%", "AC", "=", "DEL"
  ];


buttons.forEach(label => {
  const button = document.createElement("button");
  button.textContent = label;
  button.addEventListener("click", () => ButtonClick(label));
  
  buttonsContainer.appendChild(button);
});

//calculate
function evaluate(num1, num2, sym1) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (sym1) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "*":
        return (num1 * num2).toString();
      case "/":
        return (num1 / num2).toString();
      case "^":
        return (num1 ** num2).toString();
      case "%":
        return (num1 % num2).toString();
    }
    return "";
  }

// Calculator logic
let currentInput = "";
let operator = null;
let firstNumber = null;
let logOperation = "";

function ButtonClick(label) {
  if (label === "=") {
    if (firstNumber !== null && operator !== null) {
      currentInput = evaluate(firstNumber, currentInput, operator);
      screen.value = logOperation + label + currentInput;
      logOperation = currentInput
      firstNumber = null;
      operator = null;
    }
  } else if (["+", "-", "*", "/", "^", "%"].includes(label)) {
    if (currentInput !== "") {
      firstNumber = currentInput;
      operator = label;
      logOperation = currentInput + label;
      currentInput = "";
      screen.value = logOperation;
    }
  } else if (label === "AC") {
    // Clear the calculator
    currentInput = "";
    firstNumber = null;
    operator = null;
    screen.value = "";
    logOperation = "";
  } else if (label === "DEL" ){
    currentInput = currentInput.slice(0, -1);
    logOperation = logOperation.slice(0, -1);
    screen.value = logOperation;
  }else {
    currentInput += label;
    logOperation += label;
    screen.value = logOperation;
  }
}

screen.addEventListener("input", () => {
  const touch = screen.value;
  if(touch.length > 0){
    lastElement = value.slice(-1);
    if(lastElement === "="){
      ButtonClick("=");
    }
    else if(["+", "-", "*", "/", "**", "%"].includes(lastElement)){
      ButtonClick(lastElement);
    }
    else if(lastElement === "AC"){
      ButtonClick("AC");
    }
    else if(lastElement === "DEL"){
      ButtonClick("DEL");
    }
    else {
      currentInput = value;
      logOperation = value;
    }
  }
  
});



createButton();













createButton();
