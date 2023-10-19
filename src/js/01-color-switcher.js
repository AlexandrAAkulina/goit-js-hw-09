import '../css/common.css';

const startButtonEl = document.querySelector('[data-start]');
const stoptButtonEl = document.querySelector('[data-stop]');

let intervalId = null;

startButtonEl.addEventListener('click', onStartButtonClick);
stoptButtonEl.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
    onButtonDisabled();
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function onStopButtonClick() {
    clearInterval(intervalId);
    onButtonDisabled();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onButtonDisabled() {
    if (!startButtonEl.disabled) {
        startButtonEl.disabled = true; 
        stoptButtonEl.disabled = false;
    } else {
        startButtonEl.disabled = false;
        stoptButtonEl.disabled = true;
    }
}





