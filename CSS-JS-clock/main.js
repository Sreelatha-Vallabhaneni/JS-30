const clock = document.querySelector('.clock');
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const seconds = document.querySelector(".seconds");

const setTime = () => {
    const date = new Date();
    const setSeconds = date.getSeconds();
    const secondsDegrees = ((setSeconds / 60) * 360) + 90;
    seconds.style.transform = `rotate(${secondsDegrees}deg)`;
    const setMins = date.getMinutes();
    const minsDegrees = ((setMins / 60) * 360) + ((setSeconds / 60) * 6) + 90;
    mins.style.transform = `rotate(${minsDegrees}deg)`;
    const setHour = date.getHours();
    const hourDegrees = ((setHour / 12) * 360) + ((setMins / 60) * 30) + 90;
    hours.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setTime, 1000);
setTime();