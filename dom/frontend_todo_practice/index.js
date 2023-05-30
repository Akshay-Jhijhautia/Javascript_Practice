const createToDo = document.querySelector("#newTodo");
const noOfItems = document.querySelector(".footer");

let allTodo = [];
let count = 0;

createToDo.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let incomingTodo = createToDo.value;

    let input = document.createElement("input");
    input.setAttribute("class", "newlist");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "newData");

    let label = document.createElement("label");
    label.setAttribute("class", "check");
    label.setAttribute("for", "newData");
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

const allData = document.querySelector(".all");
allData.addEventListener("click", function () {
  let all = document.querySelector(".todoDetails");
  all.innerHTML = "";
  allTodo.forEach((item) => {
    all.appendChild(item);
  });
});

let completedData = document.querySelector(".completed");
completedData.addEventListener("click", function () {
  let all = document.querySelector(".todoDetails");
  all.innerHTML = "";
  let isChecked = allTodo.filter(
    (item) => item.querySelector("input").checked === true
  );
  isChecked.forEach((item) => {
    all.append(item);
  });
  noOfItems.innerText = `${isChecked.length} items left`;
});

let activeData = document.querySelector(".active");
activeData.addEventListener("click", function () {
  let all = document.querySelector(".todoDetails");
  all.innerHTML = "";
  let isActive = allTodo.filter(
    (item) => item.querySelector("input").checked === false
  );
  isActive.forEach((item) => {
    all.appendChild(item);
  });
  noOfItems.innerText = `${isActive.length} items left`;
});

let clearCompleted = document.querySelector(".clear_completed");
clearCompleted.addEventListener("click", function () {
  let all = document.querySelector(".todoDetails");
  all.innerHTML = "";
  let isActive = allTodo.filter(
    (item) => item.querySelector("input").checked === false
  );
  isActive.forEach((item) => {
    all.appendChild(item);
  });
  noOfItems.innerText = `${isActive.length} items left`;
});

function deleteTodo(target) {
  let all = document.querySelector(".todoDetails");
  all.innerHTML = "";
  console.log(allTodo[0].querySelector("img").id);
  let deletedTodo = allTodo.filter(
    (item) => item.querySelector("img").id !== target.id
  );
  allTodo.length = deletedTodo.length;
  for (let index = 0; index < allTodo.length; index++) {
    allTodo[index] = deletedTodo[index];
  }
  allTodo.forEach((item) => {
    all.appendChild(item);
  });
  noOfItems.innerText = `${deletedTodo.length} items left`;
}
