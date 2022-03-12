const btns = document.querySelectorAll('.btn');
const equals = document.querySelector('.btn--equals');
const del = document.querySelector('.btn--del');
const reset = document.querySelector('.btn--reset');

let display = document.querySelector('.calc__result');

let number = 0;
let operand = '';

function handleCalculation(e) {
  console.log(e.target.value);
  if (e.target.value === '+') {
    display.textContent = number + parseInt(display.value);
  }
  if (e.target.value === '-') {
    display.textContent = number - parseInt(display.value);
  }
  if (e.target.value === '/') {
    display.textContent = number / parseInt(display.value);
  }
  if (e.target.value === 'x') {
    display.textContent = number * parseInt(display.value);
  }
}

function handleEquals() {
  //   handleCalculation();
}

function handleReset() {
  display.textContent = '';
}

function handleDelete() {
  display.toString().slice(0, -1);
}

btns.forEach(btn => {
  btn.addEventListener('click', handleCalculation);
});

equals.addEventListener('click', handleEquals);
del.addEventListener('click', handleDelete);
reset.addEventListener('click', handleReset);
