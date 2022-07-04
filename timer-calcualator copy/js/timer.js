
const timerDisplay = document.querySelector('.timer__display');

let timerInput = document.getElementById("time");

let timer = null;

export function startInterval(time) {
    time = timerInput.value;
    timer = setInterval(function() {
        if (time < 1) {
          clearInterval(timer);
          console.log(`Time is over`);
        } else if (time <= 5) {
          console.log(`Left ${time}`);
        }
        timerDisplay.textContent = time;
      --time;
    }, 1000);
  }

export function stopInterval() {
    
    clearInterval(timer);
  }