const clockContainer = document.querySelector('.js-clock');
    clockTitle = clockContainer.querySelector('h1'),
    countDownTitle = clockContainer.querySelector('h2');

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}`:`${hour}`}:${minute < 10 ? `0${minute}`:`${minute}`}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();