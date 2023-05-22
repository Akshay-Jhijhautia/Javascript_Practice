// document.querySelector("#football").addEventListener("click", function (event) {
//   console.log("Football is clicked");
//   event.target.style.backgroundColor = "red";
// });

// document
//   .querySelector("#basketball")
//   .addEventListener("click", function (event) {
//     console.log("Basketball is clicked");
//     event.target.style.backgroundColor = "green";
//   });

// document.querySelector("#boxing").addEventListener("click", function (event) {
//   console.log("Boxing is clicked");
//   event.target.style.backgroundColor = "yellow";
// });

// document.querySelector("#tennis").addEventListener("click", function (event) {
//   console.log("Tennis is clicked");
//   event.target.style.backgroundColor = "brown";
// });

// document.querySelector("#golf").addEventListener("click", function (event) {
//   console.log("Golf is clicked");
//   event.target.style.backgroundColor = "violet";
// });

// Use event listener for parent i.e ul rather than all li ie. list elements

document.querySelector("#sports").addEventListener("click", function (event) {
  // method 1

  //   console.log(event.target.getAttribute("id") + ` is clicked`);
  //   event.target.style.backgroundColor = "lightgrey";

  // method 2

  const target = event.target;

  console.log(target.getAttribute("id") + ` is clicked`);

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const ul = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "Swimming";
newSport.setAttribute("id", "swimming");

ul.append(newSport);
