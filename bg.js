const body = document.querySelector('body');

const NUMBER_OF_IMG = 6;

function paintBg(imgNumber){
    const bg = new Image();
    bg.src = `images/${imgNumber + 1}.jpg`;
    bg.classList.add("bgImage");
    body.prepend(bg);
}

function genRandom(){
    const random = Math.floor(Math.random() * NUMBER_OF_IMG);
    return random;
}

function init(){
    paintBg(genRandom());
}

init();