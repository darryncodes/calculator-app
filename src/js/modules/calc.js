const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const previousNumberElement = document.querySelector('.calc__previous');
const currentNumberElement = document.querySelector('.calc__current');

let previousNumber = '';
let currentNumber = '';
let operand = '';

// RESET
export function handleReset() {
  previousNumber = '';
  currentNumber = '';
  operand = '';
  updateDisplay();
}

// DELETE
export function handleDelete() {
  currentNumber = currentNumber.toString().slice(0, -1);
  updateDisplay();
}

// APPEND NUMBER
export function handleNumberPress(e) {
  let previousDisplayNumber = currentNumberElement.textContent;
  let currentDisplayNumber = e.target.innerText;

  if (currentDisplayNumber === '.' && currentNumber.includes('.')) return;
  currentNumber =
    previousDisplayNumber.toString() + currentDisplayNumber.toString();
  updateDisplay();
}

// CHOOSE OPERATION
export function handleOperationPress(e) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    handleEqaulPress();
  }
  operand = e.target.innerText;
  previousNumber = currentNumber;
  currentNumber = '';
  updateDisplay();
}

// CALCULATE
export function handleEqaulPress() {
  let resultNumber;
  const previous = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(previous) || isNaN(current)) return;

  if (operand === '+') {
    resultNumber = previous + current;
  }
  if (operand === '-') {
    resultNumber = previous - current;
  }
  if (operand === '/') {
    resultNumber = previous / current;
  }
  if (operand === 'x') {
    resultNumber = previous * current;
  }

  currentNumber = resultNumber;
  operand = '';
  previousNumber = '';
  updateDisplay();
}

// UPDATE DISPLAY
export function updateDisplay() {
  currentNumberElement.textContent = currentNumber;
  previousNumberElement.textContent = previousNumber + ` ${operand}`;
}

handleReset();

numberButtons.forEach(btn => {
  btn.addEventListener('click', handleNumberPress);
});
operationButtons.forEach(btn => {
  btn.addEventListener('click', handleOperationPress);
});
equalsButton.addEventListener('click', handleEqaulPress);
resetButton.addEventListener('click', handleReset);
deleteButton.addEventListener('click', handleDelete);
