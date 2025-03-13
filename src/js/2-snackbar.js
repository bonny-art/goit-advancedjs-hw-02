import { iziToast } from './config/iziToast';
import 'izitoast/dist/css/iziToast.min.css';

const FULFILLED = 'fulfilled';

const snackbarRefs = {
  form: document.querySelector('.form'),
};

const iziToastOptions = {
  resolved: {
    iconUrl: '/goit-advancedjs-hw-02/img/resolved.svg',

    progressBarColor: '#326101',
    backgroundColor: '#59A10D',
  },
  rejected: {
    iconUrl: '/goit-advancedjs-hw-02/img/illegal.svg',

    progressBarColor: '#B51B1B',
    backgroundColor: '#E00000',
  },
};

const promiseRun = (duration, isFulfilled) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isFulfilled
        ? resolve(`✅ Fulfilled promise in ${duration}ms`)
        : reject(`❌ Rejected promise in ${duration}ms`);
    }, duration);
  });
};

const onFormSubmit = evt => {
  evt.preventDefault();

  const form = evt.currentTarget;

  const duration = form.elements.delay.value;
  const isFulfilled = form.elements.state.value === FULFILLED;

  console.log('Resolved toast options:', {
    ...iziToastOptions.resolved,
    message,
  });
  console.log('Rejected toast options:', {
    ...iziToastOptions.rejected,
    message,
  });

  promiseRun(duration, isFulfilled)
    .then(message => {
      iziToast.show({ ...iziToastOptions.resolved, message });
    })
    .catch(message => {
      iziToast.show({ ...iziToastOptions.rejected, message });
    });

  form.reset();
};

snackbarRefs.form.addEventListener('submit', onFormSubmit);
