import '../css/common.css';

const startButtonEl = document.querySelector('[data-start]');
const stoptButtonEl = document.querySelector('[data-stop]');

let intervalId = null;

startButtonEl.addEventListener('click', onStartButtonClick);
stoptButtonEl.addEventListener('click', onStopButtonClick);

function onStartButtonClick () {
    startButtonEl.disable = true;
    stoptButtonEl.disable = false;
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function onStopButtonClick() {
    stoptButtonEl.disable = true;
    startButtonEl.disable = false;
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}





