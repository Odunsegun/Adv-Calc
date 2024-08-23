//creating and styling the calculator
const calculator = document.createElement("div");
calculator.classList.add("calculator")
calculator.style.border ="1px solid black";

document.body.appendChild(calculator);

//create screen
const screen = document.createElement("input");
screen.type = "text";
screen.classList.add("screen");
screen.disabled = true;
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
    "0", ".", "**", "+",
    "%", "C", "="
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
      case "**":
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

function ButtonClick(label) {
  if (label === "=") {
    if (firstNumber !== null && operator !== null) {
      currentInput = evaluate(firstNumber, currentInput, operator);
      screen.value = currentInput;
      firstNumber = null;
      operator = null;
    }
  } else if (["+", "-", "*", "/", "**", "%"].includes(label)) {
    if (currentInput !== "") {
      firstNumber = currentInput;
      operator = label;
      currentInput = "";
    }
  } else if (label === "C") {
    // Clear the calculator
    currentInput = "";
    firstNumber = null;
    operator = null;
    screen.value = "";
  } else {
    currentInput += label;
    screen.value = currentInput;
  }
}



createButton();













createButton();
