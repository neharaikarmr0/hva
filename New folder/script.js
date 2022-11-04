var addbutton = document.getElementById("add-button");
var clearbutton = document.getElementById("clear-button");
var emptybutton = document.getElementById("empty-button");
var savebutton = document.getElementById("save-button");
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

addbutton.addEventListener("click", addToDoItem);
clearbutton.addEventListener("click", clearItem);
emptybutton.addEventListener("click", emptyItem);
savebutton.addEventListener("click", saveItem);

function addToDoItem(){
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function newToDoItem(itemText, completed){
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);

    if(completed){
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick",toggleToDoItemState);
}

function clearItem(){
    alert("Clear button clicked");
}

function emptyItem(){
    alert("Empty button clicked");
}

function saveItem(){
    alert("Save button clicked");
}