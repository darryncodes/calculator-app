const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
let display = document.querySelector('.calc__display');

let currentNumber = '';
let previousNumber = '';
let resultNumber = '';
let operand = '';
let decimalClicked = false;

export function handleNumberPress(e) {
  currentNumber = e.target.innerText;
  previousNumber = display.textContent;

  //   if (resultNumber) {
  //     resultNumber = '';
  //   } else {
  //     if (currentNumber === '.') {
  //       if (decimalClicked !== true) {
  //         currentNumber = display.innerText + currentNumber;
  //         decimalClicked = true;
  //       } else {
  //         currentNumber += currentNumber;
  //       }
  //     }
  //   }
  display.innerText = previousNumber.toString() + currentNumber.toString();

  //   display.innerText = currentNumber;
  console.log(currentNumber);
}
export function handleOperationPress(e) {
  if (!resultNumber) {
    previousNumber = currentNumber;
  } else {
    previousNumber = resultNumber;
  }
  currentNumber = '';
  decimalClicked = false;
  operand = e.target.innerText;
  resultNumber = '';
  display.textContent = '';
}
export function handleEqaulPress() {
  //   decimalClicked = false;
  previousNumber = parseInt(previousNumber);
  currentNumber = parseInt(currentNumber);

  if (operand === '+') {
    resultNumber = previousNumber + currentNumber;
  }
  if (operand === '-') {
    resultNumber = previousNumber - currentNumber;
  }
  if (operand === '/') {
    resultNumber = previousNumber / currentNumber;
  }
  if (operand === 'x') {
    resultNumber = previousNumber * currentNumber;
  }

  //   previousNumber = resultNumber;
  display.textContent = resultNumber;
}
export function handleDelete() {
  display.innerText = display.textContent.toString().slice(0, -1);
}
export function handleReset() {
  currentNumber = '';
  previousNumber = '';
  resultNumber = '';
  operand = undefined;
  decimalClicked = false;
  display.textContent = '';
}

numberButtons.forEach(btn => {
  btn.addEventListener('click', handleNumberPress);
});
operationButtons.forEach(btn => {
  btn.addEventListener('click', handleOperationPress);
});
equalsButton.addEventListener('click', handleEqaulPress);
deleteButton.addEventListener('click', handleDelete);
resetButton.addEventListener('click', handleReset);
