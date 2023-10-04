const buttonEl= document.getElementById("add-button");
const textEl= document.getElementById("input-field");
const todoListEl =document.getElementById("todo-list");


buttonEl.addEventListener("click",function(){
    if(textEl.value != ""){
appendItemToList(textEl);
    }
else {
    todoListEl.innerHTML+=`<li>Enter a value</li>`

}
})

function appendItemToList(text){
let newEl = document.createElement("li");
newEl.textContent=text.value;
todoListEl.appendChild(newEl); 
}