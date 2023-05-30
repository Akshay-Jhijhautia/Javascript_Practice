const button = document.querySelector(".start");
const timer = document.querySelector(".time");
const pauseButton = document.querySelector(".pause");
const reload = document.querySelector(".reload");
let time = 10;
let stop;

const container = document.querySelector(".container");
container.addEventListener("click", function (event) {
  let classNew = event.target.className;

  if (classNew === "start") {
    stop = setInterval(function () {
      time--;
      timer.innerText = time;
      if (time === 0) {
        clearInterval(stop);
      }
    }, 1000);
  } else if (classNew === "pause") {
    clearInterval(stop);
  } else if (classNew === "reload") {
    location.reload();
  }
});
