import '../css/common.css';

const startButtonEl = document.querySelector('[data-start]');
const stoptButtonEl = document.querySelector('[data-stop]');

let intervalId = null;

startButtonEl.addEventListener('click', onStartButtonClick);
stoptButtonEl.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
    onButtonDisabled(true);
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function onStopButtonClick() {
    clearInterval(intervalId);
    onButtonDisabled(false);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onButtonDisabled(disabled) {
        startButtonEl.disabled = disabled; 
        stoptButtonEl.disabled = !disabled;
    }






