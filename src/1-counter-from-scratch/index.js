const increment = document.querySelector(".increment-container");
const button = document.querySelector("#increment-btn");
const header = document.querySelector("#h1");
const reset = document.querySelector(".reset-container");
let num = 1;

increment.addEventListener("click", () => {
  header.textContent = `${num++}`;
});

reset.addEventListener("click", () => {
  header.textContent = `${(num = 0)}`;
});
