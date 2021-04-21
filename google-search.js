//https://www.google.com/search?q=

const googleSearchForm = document.querySelector(".googleSearchForm"),
    googleSearchInput = googleSearchForm.querySelector("input");

let GOOGLE_SEARCH = "https://www.google.com/search?q=";

function handleSubmitGoogle(event){
    event.preventDefault();
    const currentValue = googleSearchInput.value;
    GOOGLE_SEARCH += currentValue;
    window.open(GOOGLE_SEARCH);
    event.value = "";
}

function init(){
    googleSearchForm.addEventListener("submit", handleSubmitGoogle);
}

init();