const youtubeSearchForm = document.querySelector(".youtubeSearchForm"),
    youtubeSearchInput = youtubeSearchForm.querySelector("input");

const YOUTUBE_SEARCH = "https://www.youtube.com/results?search_query=";

function handleSubmitYoutube(event){
    event.preventDefault();
    const currentValue = youtubeSearchInput.value;
    if(currentValue != ""){
        window.open(YOUTUBE_SEARCH + currentValue);
        youtubeSearchInput.value = "";
    }
}

function init(){
    youtubeSearchForm.addEventListener("submit", handleSubmitYoutube);
}

init();