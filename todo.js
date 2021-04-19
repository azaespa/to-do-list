const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];

function addChunkToToDosArray(chunkDownParentId, text){
    toDos.forEach(function(toDo){
        if(toDo.id === Number(chunkDownParentId)){
            if(toDo.hasOwnProperty("child")){
                toDo.child.push(text);
            } else {
                toDo["child"] = [];
                toDo.child.push(text);
            }
        }
    });
}

function paintChunkDownToDo(id, text){
    const chunkDownUL = document.getElementById(id);
    const chunkDownParentId = chunkDownUL.parentNode.id;
    const chunkDownLI = document.createElement("li");
    const chunkDownToDo = document.createElement("span");
    chunkDownToDo.innerText = text;
    chunkDownLI.classList.add("chunkDownToDo");
    chunkDownLI.appendChild(chunkDownToDo);
    chunkDownUL.appendChild(chunkDownLI);
    addChunkToToDosArray(chunkDownParentId, text);
    saveToDos();
}

function loadChunkToDos(){
    
}

function handleSubmitChunk(event){
    event.preventDefault();
    const chunkDownUL = event.target.closest("ul");
    const chunkDownULId = chunkDownUL.id;
    const chunkDownInput = event.target.querySelector("input");
    const currentValue = chunkDownInput.value;
    paintChunkDownToDo(chunkDownULId, currentValue);
    chunkDownInput.value = "";
}

function paintChunkDownList(id){
    const toDo = document.getElementById(id);
    const chunkDownUL = toDo.querySelector("ul");
    const chunkDownForm = toDo.querySelector("form");
    if(chunkDownUL.classList.contains(SHOWING_CN)){
        chunkDownUL.classList.remove(SHOWING_CN);
    } else {
        chunkDownUL.classList.add(SHOWING_CN);
        chunkDownForm.focus();
    }
    chunkDownForm.addEventListener("submit", handleSubmitChunk);
}

function handleClick(event){
    const toDoListId = event.target.parentNode.id;
    if (toDoListId !== "") {
        paintChunkDownList(toDoListId);
    }
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== Number(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    //
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const id = toDos.length + 1;
    //
    const chunkDownInput = document.createElement("input");
    const chunkDownForm = document.createElement("form");
    const chunkDownUL = document.createElement("ul");
    const chunkDownLI = document.createElement("li");
    //
    delBtn.innerText = "❌";
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.id = id;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    

    chunkDownInput.placeholder = "Chunk it down?";
    chunkDownUL.classList.add("chunkDownToDoList");
    chunkDownUL.id = li.id.concat("childUL");
    chunkDownForm.appendChild(chunkDownInput);
    chunkDownLI.appendChild(chunkDownForm);
    chunkDownUL.appendChild(chunkDownLI);
    li.appendChild(chunkDownUL);

    const toDoObj = {
        text: text,
        id: id,
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmitToDo(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmitToDo);
    toDoList.addEventListener('click', handleClick);
    toDoInput.focus();
}

init();