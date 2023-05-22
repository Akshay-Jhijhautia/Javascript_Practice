const list = document.querySelector("ul");

const newElement = document.createElement("li");

newElement.innerText = "Avengers End Game";

list.append(newElement);

newElement.setAttribute("id", "main-heading");
console.log(newElement.getAttribute("id"));

newElement.removeAttribute("id");
console.log(newElement.getAttribute("id"));
newElement.classList.add("list-items");

console.log(newElement.classList.contains("list-items"));
newElement.classList.remove("list-items");

console.log(newElement.classList.contains("list-items"));
