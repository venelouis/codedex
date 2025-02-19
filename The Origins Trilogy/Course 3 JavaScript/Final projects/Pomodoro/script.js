const bells = new Audio('./sounds/bell.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const session = document.querySelector('.minutes'); 
let myInterval; 
let state = true;

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)
  
    if(state) {
      state = false;
      let totalSeconds = sessionAmount * 60;
  
      const updateSeconds = () => {
        // Function code here.
      }
      myInterval = setInterval(updateSeconds, 1000);
    } else {
      alert('Session has already started.')
    }
  }

  const updateSeconds = () => {
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');
  
    totalSeconds--;
  
    let minutesLeft = Math.floor(totalSeconds/60);
    let secondsLeft = totalSeconds % 60;
  
    if(secondsLeft < 10) {
      secondDiv.textContent = '0' + secondsLeft;
    } else {
      secondDiv.textContent = secondsLeft;
    }
    minuteDiv.textContent = `${minutesLeft}`
  
    if(minutesLeft === 0 && secondsLeft === 0) {
      bells.play()
      clearInterval(myInterval);
    }
  }

  const updateSeconds = () => {
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');
  
    totalSeconds--;
  
    let minutesLeft = Math.floor(totalSeconds/60);
    let secondsLeft = totalSeconds % 60;
  }

  if(secondsLeft < 10) {
    secondDiv.textContent = '0' + secondsLeft;
  } else {
    secondDiv.textContent = secondsLeft;
  }
  minuteDiv.textContent = `${minutesLeft}`;
  
  if(minutesLeft === 0 && secondsLeft === 0) {
    bells.play();
    clearInterval(myInterval);
  }

  startBtn.addEventListener('click', appTimer);

const resetBtn = document.querySelector('.btn-reset');
const pauseBtn = document.querySelector('.btn-pause');
let isPaused = false;

const resetTimer = () => {
    clearInterval(myInterval);
    state = true;
    isPaused = false;
    session.textContent = '25'; // Assuming the initial time is 25 minutes
    document.querySelector('.seconds').textContent = '00';
};

const pauseTimer = () => {
    if (isPaused) {
        myInterval = setInterval(updateSeconds, 1000);
        pauseBtn.textContent = 'Pause';
    } else {
        clearInterval(myInterval);
        pauseBtn.textContent = 'Resume';
    }
    isPaused = !isPaused;
};

resetBtn.addEventListener('click', resetTimer);
pauseBtn.addEventListener('click', pauseTimer);