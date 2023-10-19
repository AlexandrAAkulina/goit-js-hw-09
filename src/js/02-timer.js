import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/common.css';

const refs = {
    buttonStartEl: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
};

const currentDate = Date.now();
let selectedDate = Date.now();
let idInterval = null;


refs.buttonStartEl.addEventListener('click', onCountTimeClick);

refs.buttonStartEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        
        if (selectedDates[0] < currentDate)
        {
            Notify.failure('Please choose a date in the future')
            refs.buttonStartEl.disabled = true;   
        } else {
            refs.buttonStartEl.disabled = false;
            selectedDate = selectedDates[0];
        }
      },
    
};

flatpickr("#datetime-picker", options);

let calculatedTimeObj = {};

function onCountTimeClick() {
    idInterval = setInterval(() => {
        const result = selectedDate - Date.now();
        calculatedTimeObj = convertMs(result);
        if (result <= 0) {
            clearTimeout(idInterval);
            return;
        }
        
        clockView(calculatedTimeObj);
    }, 1000);
}

function clockView({days, hours, minutes, seconds}) {
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}



