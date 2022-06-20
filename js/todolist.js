const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY = "todos";
let toDos = [];


function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
   const li = event.target.parentElement;
   li.remove();
   //해당 투드 배열 아이디필터 값을 삭제 저장
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
}

function paintToDo(newTodo){
    const toDoListLi = document.createElement('li');
    toDoListLi.id = newTodo.id;

    const span = document.createElement('span');
    span.innerText = newTodo.text;

    const button = document.createElement('button');
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    toDoListLi.appendChild(span);
    toDoListLi.appendChild(button);
    toDoList.appendChild(toDoListLi);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}