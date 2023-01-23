

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyDocument = document.querySelector("body");

let timerId = null;
let isActive = false;

startBtn.addEventListener("click",startChangeColor);
stopBtn.addEventListener("click", stopChangeColor);

function startChangeColor() {
if (isActive){
    return;
}
    timerId = setInterval(() => {
    isActive=true;
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
    isActive=false;
    }







// stopBtn.addEventListener("click", () => {
//   
//   console.log(`Interval with id ${timerId} has stopped!`);
// });