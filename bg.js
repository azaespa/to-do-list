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
    const bg = new Image();
    bg.src = "https://images.unsplash.com/photo-1577812564145-f65ba5d99c9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80";
    bg.classList.add("bgImage");
    background.prepend(bg);
}

init();