const refs = {
  btnChangeColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  spanColor: document.querySelector('span.color'),
}

refs.btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.spanColor.textContent = `${getRandomHexColor()}`;
}
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  
}
