

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyDocument = document.querySelector("body");

let timerId = null;

startBtn.addEventListener("click",startChangeColor);
stopBtn.addEventListener("click", stopChangeColor);

function startChangeColor() {
    timerId = setInterval(() => {
    startBtn.setAttribute('disabled', true);
    const color = getRandomHexColor();
    bodyDocument.style.backgroundColor = color;
    },1000)
    console.log("najali knopku")
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  function stopChangeColor() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled')
    }
