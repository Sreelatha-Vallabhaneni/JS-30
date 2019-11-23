const clock = document.querySelector('.clock');
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const seconds = document.querySelector(".seconds");

const setTime = () => {
    const date = new Date();
    const setSeconds = date.getSeconds();
    const secondsDegrees = ((setSeconds / 60) )
}