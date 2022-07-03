import { printError, printResult } from './printResult.js';
import getDateDiff from './getDateDiff.js';
import {getHidden} from './getHidden.js'
import { startInterval, stopInterval } from './timer.js';

const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const firstDate = formData.get('firstDate');
  const secondDate = formData.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Ooopps - please enter a date')
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate);
    printResult(dateDiff);
  }
};

document.querySelector('body').addEventListener('click', (event) => {
  if ( (event.target.parentElement.classList.contains('switch-button')) && (event.target.classList == 'timer--btn' || 'calc--btn')) {
    getHidden();
  } else {
    return
  }
});

// timer

document.getElementById("start").addEventListener("click", (event) => {
  event.preventDefault();
  startInterval();
});
document.getElementById("stop").addEventListener("click", (event) => {
  event.preventDefault();
  stopInterval();
});