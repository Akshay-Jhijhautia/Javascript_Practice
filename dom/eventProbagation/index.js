window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  // true
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  // true
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  function () {
    //event.stopPropagation();
    console.log("Div 2");
  },
  // true
  false
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("Div 1");
  },
  // true
  false
);

document.querySelector("button").addEventListener(
  "click",
  function (event) {
    //console.log(event);
    console.log((event.target.innerText = "button clicked"));
  },
  // true
  false
);
