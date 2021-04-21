//https://www.google.com/search?q=

const googleSearchForm = document.querySelector(".googleSearchForm"),
    googleSearchInput = googleSearchForm.querySelector("input");

const GOOGLE_SEARCH = "https://www.google.com/search?q=";

function handleSubmitGoogle(event) {
    event.preventDefault();
    let currentValue = googleSearchInput.value;
    if (currentValue != "") {
        window.open(GOOGLE_SEARCH + currentValue);
        googleSearchInput.value = "";
    }
}

function init() {
    googleSearchForm.addEventListener("submit", handleSubmitGoogle);
}

init();