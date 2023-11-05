let divText = document.querySelector("div");
let buttonEl = document.querySelector("button");

let colours = ["red", "blue", "purple", "green", "yellow", "black", "pink"];
let count = 0;
buttonEl.addEventListener("click", function () {
  count >= colours.length
    ? (count = 0)
    : (divText.style.color = colours[count++]);
});
