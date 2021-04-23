const inputNameForm = document.querySelector('.js-inputNameForm'),
    input = inputNameForm.querySelector('input'),
    greetings = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    localStorage.setItem(USER_LS, currentValue);
}

function askForName() {
    inputNameForm.classList.add(SHOWING_CN);
    inputNameForm.addEventListener('submit', handleSubmit);
}

function paintGreetings(text) {
    inputNameForm.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hi, ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreetings(currentUser);
    }
}

function init() {
    loadName();
}

init ();