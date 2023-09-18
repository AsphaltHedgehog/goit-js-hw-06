function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bckGroundColor = document.querySelector('body');

const colorBtn = document.querySelector(".change-color");

const currentColorString = document.querySelector(".color");

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  const currentRandomColor = getRandomHexColor()
  bckGroundColor.style.backgroundColor = currentRandomColor;
  currentColorString.textContent = currentRandomColor;
};

