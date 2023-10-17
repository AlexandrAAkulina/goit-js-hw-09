import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selectors = {
  formEl: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}

selectors.formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay })
      } else {
        rej({ position, delay })
      }
    }, delay);
  })
}

function onFormSubmit(evt) {
  evt.preventDefault();

  let delayNum = Number(selectors.delay.value);
  let amountNum = Number(selectors.amount.value);
  let stepNum = Number(selectors.step.value);

  for (let i = 1; i <= amountNum; i += 1) {
    createPromise(i, delayNum)
      .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayNum += stepNum;
  }
}