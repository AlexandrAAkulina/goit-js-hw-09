import Notiflix from 'notiflix';

const selectors = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}

selectors.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        res({ position, delay })
      } else {
        // Reject
        rej({ position, delay })
      }
    }, delay);
    // return promise;
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
      // console.log(position);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayNum += stepNum;
  }
}