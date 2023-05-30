const createToDo = document.querySelector("#newTodo");
const noOfItems = document.querySelector(".footer");

let allTodo = [];
let count = 0;
let elementId = 0;

createToDo.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let incomingTodo = createToDo.value;

    let input = document.createElement("input");
    input.setAttribute("class", "newlist");
    input.setAttribute("type", "checkbox");
    elementId++;
    input.setAttribute("id", elementId);

    let label = document.createElement("label");
    label.setAttribute("class", "check");
    label.setAttribute("for", elementId);
    label.innerText = incomingTodo;

    let deleteImage = document.createElement("img");
    deleteImage.src = "./images/icon-cross.svg";
    count++;
    deleteImage.setAttribute("id", count);

    deleteImage.addEventListener("click", function (event) {
      deleteTodo(event.target);
    });

    let row_wise = document.createElement("div");
    row_wise.classList.add("data");

    row_wise.append(input);
    row_wise.append(label);
    row_wise.append(deleteImage);

    allTodo.push(row_wise);

    let allList = document.querySelector(".todoDetails");
    allList.append(row_wise);

    noOfItems.innerText = `${allTodo.length} items left`;
  }
});

const allData = document.querySelector(".all_buttons");
allData.addEventListener("click", function (event) {
  let className = event.target.className;

  if (className === "all") {
    let all = document.querySelector(".todoDetails");
    all.innerHTML = "";
    allTodo.forEach((item) => {
      all.appendChild(item);
    });
    noOfItems.innerText = `${allTodo.length} items left`;
  } else if (className === "active") {
    let all = document.querySelector(".todoDetails");
    all.innerHTML = "";
    let isActive = allTodo.filter(
      (item) => item.querySelector("input").checked === false
    );
    isActive.forEach((item) => {
      all.appendChild(item);
    });
    noOfItems.innerText = `${isActive.length} items left`;
  } else if (className === "completed") {
    let all = document.querySelector(".todoDetails");
    all.innerHTML = "";
    let isChecked = allTodo.filter(
      (item) => item.querySelector("input").checked === true
    );
    isChecked.forEach((item) => {
      all.append(item);
    });
    noOfItems.innerText = `${isChecked.length} items left`;
  } else if (className === "clear_completed") {
    let all = document.querySelector(".todoDetails");
    all.innerHTML = "";
    let isActive = allTodo.filter(
      (item) => item.querySelector("input").checked === false
    );
    allTodo = isActive;
    allTodo.forEach((item) => {
      all.appendChild(item);
    });
    noOfItems.innerText = `${isActive.length} items left`;
  }
});

function deleteTodo(target) {
  let all = document.querySelector(".todoDetails");
  all.innerHTML = "";
  let deletedTodo = allTodo.filter(
    (item) => item.querySelector("img").id !== target.id
  );
  allTodo = deletedTodo;
  allTodo.forEach((item) => {
    all.appendChild(item);
  });
  noOfItems.innerText = `${deletedTodo.length} items left`;
}
