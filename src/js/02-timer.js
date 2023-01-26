import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const tim = document.querySelector('.timer')
const fieldData = document.querySelector('#datetime-picker');
const checkBtn = document.querySelector('button[data-start]');
const daysCheck = document.querySelector('span[data-days]');
const hoursCheck = document.querySelector('span[data-hours]');
const minutesCheck = document.querySelector('span[data-minutes]');
const secondsCheck = document.querySelector('span[data-seconds]');
const noActiveBtn = checkBtn.setAttribute('disabled', true);

// стили
secondsCheck.style.color = "red";
tim.style.display = "flex";
tim.style.justifyContent = "space-around";
tim.style.marginTop = "50px";
tim.style.fontSize = "30px"
tim.style.fontWeight ="700"
const options = {
    enableTime: true,
    time_24hr: true, 
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) 
    {
        if(selectedDates[0]< Date.now()){
        Notify.warning("Please choose a date in the future");
        noActiveBtn;
    }
    else{
        checkBtn.removeAttribute('disabled');   
    }},
  };

const calendarDate = flatpickr(fieldData, options);

checkBtn.addEventListener("click", startTimeout);

function startTimeout(){
    const timerId = setInterval(()=>{
     noActiveBtn;
    const deadline = calendarDate.selectedDates[0];
    const different = deadline - Date.now(); 
    const convertTime = convertMs(different) 
    updateTimerValues(convertTime);
    if(different <  1000){
        clearInterval(timerId);
        return;
    }   
    },1000);
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
   
    return { days, hours, minutes, seconds } ;
  }
  
  function addLeadingZero(value) {
    return `${value}`.padStart(2, '0');
  }
   
    function updateTimerValues(convertTime) {
    daysCheck.textContent= addLeadingZero(convertTime.days);
    hoursCheck.textContent = addLeadingZero(convertTime.hours);
    minutesCheck.textContent = addLeadingZero(convertTime.minutes);
    secondsCheck.textContent = addLeadingZero(convertTime.seconds);
  }

  
  

  
  
