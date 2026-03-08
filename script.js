function addName(){

let name = document.getElementById("name").value

let li = document.createElement("li")
li.textContent = name

document.getElementById("list").appendChild(li)

}