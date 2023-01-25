
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
delay: document.forms[0].delay,
step: document.forms[0].step,
amount: document.forms[0].amount,
submit:document.querySelector('button[type=submit]')
}

refs.submit.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = refs.amount.value;
 
  for (let position = 1; position <= amount; position += 1) {
    if (position > 1) {
      delay += step;
    }
    createPromise(position, delay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
 
  }
}
function createPromise(position, delay) {
  console.log(position)
  console.log(delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject("error");
      }
    }, delay);
  });
};


