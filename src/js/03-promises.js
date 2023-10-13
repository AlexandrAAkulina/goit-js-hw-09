import Notiflix from 'notiflix';

const selectors = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}

selectors.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    setTimeout()
  })
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
