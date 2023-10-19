var timerElement = document.getElementsByClassName('timer');


// Initialize the timer variables
var hours = 0;
var minutes = 0;
var seconds = 0;
var timerInterval;

// Format the time string
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Update the timer display
function updateTimerDisplay() {
  timerElement.textContent = formatTime(hours) + ' : ' + formatTime(minutes) + ' : ' + formatTime(seconds);
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateTimerDisplay();
  }, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Reset the timer
function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
}

// Attach event listeners to the buttons
document.getElementsByClassName('startBtn').addEventListener('click', startTimer);
document.getElementsByClassName('stopBtn').addEventListener('click', stopTimer);
document.getElementsByClassName('resetBtn').addEventListener('click', resetTimer);