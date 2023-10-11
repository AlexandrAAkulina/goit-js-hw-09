import '../css/common.css';

const startButtonEl = document.querySelector('[data-start]');
const stoptButtonEl = document.querySelector('[data-stop]');

let counter = null;

startButtonEl.addEventListener('click', onStartButtonClick);
stoptButtonEl.addEventListener('click', onStopButtonClick);

function onStartButtonClick () {
    startButtonEl.disable = true;
    stoptButtonEl.disable = false;
    counter = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function onStopButtonClick() {
    stoptButtonEl.disable = true;
    startButtonEl.disable = false;
    clearInterval(counter);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}





