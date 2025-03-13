import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { iziToast } from './config/iziToast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('[data-start]'),

  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.show(iziToastOptions);
      refs.button.disabled = true;
      return;
    }

    refs.button.disabled = false;
    userSelectedDate = selectedDates[0].getTime();
  },
};

const iziToastOptions = {
  message: 'Please choose a date in the future!',

  iconUrl: './img/illegal.svg',

  progressBarColor: '#B51B1B',
  backgroundColor: '#EF4040',
};

let userSelectedDate;

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

const addLeadingZero = value => value.toString().padStart(2, '0');

const onStartTimer = evt => {
  refs.button.disabled = true;
  refs.input.disabled = true;

  const timerId = setInterval(() => {
    const dif = userSelectedDate - Date.now();

    if (dif <= 0) {
      clearInterval(timerId);
      refs.input.disabled = false;

      refs.days.textContent = '00';
      refs.hours.textContent = '00';
      refs.minutes.textContent = '00';
      refs.seconds.textContent = '00';
      return;
    }

    const difBySpans = convertMs(dif);

    refs.days.textContent = addLeadingZero(difBySpans.days);
    refs.hours.textContent = addLeadingZero(difBySpans.hours);
    refs.minutes.textContent = addLeadingZero(difBySpans.minutes);
    refs.seconds.textContent = addLeadingZero(difBySpans.seconds);
  }, 1000);
};

flatpickr('input#datetime-picker', flatpickrOptions);
refs.button.addEventListener('click', onStartTimer);
