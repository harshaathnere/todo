var count = 0; //added a global variable  for assiging id for every element

function todoList(){

    var item = document.getElementById('todoInput').value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    newItem.id = count //assigning id to every new item
    newItem.onclick = removeTodo //assigning a method function for removing the item 
    
    document.getElementById("todoList").appendChild(newItem)
    count++ //increased the value of count by 1
}
function removeTodo(event){
    console.log(event.target.id) // 
    var elem = document.getElementById(event.target.id);
    return elem.parentNode.removeChild(elem);

}