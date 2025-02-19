let timer;
let isRunning = false;
let time = 1500; // 25 minutes in seconds

const startButton = document.querySelector('.btn-start');
const stopButton = document.querySelector('.btn-stop');
const resetButton = document.querySelector('.btn-reset');
const durationSelect = document.querySelector('.duration-select');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
durationSelect.addEventListener('change', setDuration);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetTimer() {
  stopTimer();
  time = parseInt(durationSelect.value);
  updateDisplay();
}

function setDuration() {
  if (!isRunning) {
    time = parseInt(durationSelect.value);
    updateDisplay();
  }
}

function updateTime() {
  if (time > 0) {
    time--;
    updateDisplay();
  } else {
    stopTimer();
  }
}

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}