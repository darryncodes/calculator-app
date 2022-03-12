const input = document.querySelectorAll('.switch__input');
const inputOne = document.querySelector('#input-1');
const inputTwo = document.querySelector('#input-2');
const inputThree = document.querySelector('#input-3');
const localStorageTheme = localStorage.getItem('data-theme');

export function handleTheme() {
  if (inputOne.checked === true) {
    document.body.setAttribute('data-theme', 'one');
    localStorage.setItem('data-theme', 'one');
  }
  if (inputTwo.checked === true) {
    document.body.setAttribute('data-theme', 'two');
    localStorage.setItem('data-theme', 'two');
  }
  if (inputThree.checked === true) {
    document.body.setAttribute('data-theme', 'three');
    localStorage.setItem('data-theme', 'three');
  }
}

export function checkTheme() {
  if (inputOne.checked === true) {
    document.body.setAttribute('data-theme', `${localStorageTheme}`);
  }
  if (inputTwo.checked === true) {
    document.body.setAttribute('data-theme', `${localStorageTheme}`);
  }
  if (inputThree.checked === true) {
    document.body.setAttribute('data-theme', `${localStorageTheme}`);
  }

  if (localStorageTheme === 'one') {
    inputOne.checked = true;
  }
  if (localStorageTheme === 'two') {
    inputTwo.checked = true;
  }
  if (localStorageTheme === 'three') {
    inputThree.checked = true;
  }
}
checkTheme();

input.forEach(btn => {
  btn.addEventListener('click', handleTheme);
});
