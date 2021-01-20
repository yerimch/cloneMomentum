/*
todo list를 input을 사용해 ul list에 추가하고
local에 저장해 새로고침 시에도 불러와 출력 되게 한다.
delete btn click시 해당 todo를 html에서 삭제하는 것은 물론 local에서도 삭제시킨다.
*/

const toDoList=document.querySelector(".js-todo"),
TODO_LS="to_do_things", 
toDoForm=document.querySelector(".js-todoInput"),
toDoInput=toDoForm.querySelector("input");

let toDos=[];

function saveTodo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function handlingTodoSubmit(event)
{
    event.preventDefault();
    const tempTodo=toDoInput.value;
    paintTodo(tempTodo);
    toDoInput.value="";
}

function deleteToDo(event){
    const btn=event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    })
    toDos=cleanToDos;
    saveTodo();
}

function paintTodo(toDo)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId=toDos.length+1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = toDo;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj={
        text:toDo, id:newId
    };
    toDos.push(toDoObj);
    saveTodo();
}

function loadTodos(){
    const loadedToDos=localStorage.getItem(TODO_LS);
    if(loadedToDos!==null){
        const parsedToDos=JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintTodo(toDo.text);
        });
    }
}

function init()
{
    loadTodos();
    toDoForm.addEventListener("submit", handlingTodoSubmit);
}

init();