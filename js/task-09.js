const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");


btnChangeColor.addEventListener("click", changeColor);

function changeColor(event) {
  body.style.backgroundColor = `${getRandomHexColor()}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
