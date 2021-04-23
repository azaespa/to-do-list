const body = document.querySelector('body'),
    background = body.querySelector('.background');

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
    //paintBg(genRandom());
    body.style.backgroundImage = "url(https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)";
}

init();