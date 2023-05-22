// Event listeners

const button = document.querySelector(".reveal-btn");
console.log(button);

const content = document.querySelector(".hidden-content");
console.log(content);

const showAndHideContent = () => {
  if (content.classList.contains("reveal-btn")) {
    content.classList.remove("reveal-btn");
  } else {
    content.classList.add("reveal-btn");
  }
};

button.addEventListener("click", showAndHideContent);
