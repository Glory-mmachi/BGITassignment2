const mainEl = document.querySelector(".main");
const btnView = document.querySelector(".view");
const btnExit = document.querySelector(".exit");
const modalEl = document.querySelector(".recipe-conatianer");

btnView.addEventListener("click", function () {
  mainEl.style.display = "none";
  modalEl.classList.toggle("hidden");
});

btnExit.addEventListener("click", function () {
  mainEl.style.display = "flex";
  modalEl.classList.toggle("hidden");
});
