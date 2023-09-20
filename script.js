const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
let displayed = false;
let operation = "";
let num1 = 0;

const getOperand = () => {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      displayed
        ? (display.textContent += e.target.textContent)
        : (display.textContent = e.target.textContent);
      displayed = true;
    });
  });
};

const operators = document.querySelectorAll(".operator");

const getOperator = () => {
  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      if (e.target.textContent === "+") {
        if (operation != "" && operation != "equals") equals();
        operation = "add";
        num1 = Number(display.textContent);
      }
      if (e.target.textContent === "-") {
        if (operation != "" && operation != "equals") equals();
        operation = "subtract";
        num1 = Number(display.textContent);
      }
      if (e.target.textContent === "➗") {
        if (operation != "" && operation != "equals") equals();
        operation = "divide";
        num1 = Number(display.textContent);
      }
      if (e.target.textContent === "x") {
        if (operation != "" && operation != "equals") equals();
        operation = "multiply";
        num1 = Number(display.textContent);
      }
      if (e.target.textContent === "=") {
        equals();
        operation = "equals";
      }
      if (e.target.textContent === "+/-") {
        operation = "invert";
        num1 = Number(display.textContent);
        equals();
      }
      if (e.target.textContent === "%") {
        operation = "percent";
        num1 = Number(display.textContent);
        equals();
      }
      displayed = false;
    });
  });
};

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (e) => {
  if (!display.textContent.includes(".")) {
    display.textContent += e.target.textContent;
    displayed = true;
  }
});

const functions = document.querySelectorAll(".function");

const getFunction = () => {
  functions.forEach((func) => {
    func.addEventListener("click", (e) => {
      if (e.target.textContent === "AC") {
        clear();
        displayed = false;
      }
    });
  });
};

const clear = () => {
  display.textContent = "0";
  num1 = 0;
  operation = "";
};

const equals = () => {
  if (operation === "add") {
    display.textContent = add(num1, Number(display.textContent));
  }
  if (operation === "subtract") {
    display.textContent = subtract(num1, Number(display.textContent));
  }

  if (operation === "multiply") {
    display.textContent = multiply(num1, Number(display.textContent));
  }
  if (operation === "divide") {
    if (Number(display.textContent) === 0) {
      display.textContent = "NAN";
    } else {
      display.textContent = divide(num1, Number(display.textContent));
    }
  }
  if (operation === "invert") {
    display.textContent = multiply(num1, -1);
  }
  if (operation === "percent") {
    display.textContent = divide(num1, 100);
  }
};

getOperand();
getOperator();
getFunction();
