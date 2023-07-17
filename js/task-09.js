function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const descClr = document.querySelector(".color");
const btnChangeClr = document.querySelector(".change-color");
const bodyBg = document.body;
descClr.textContent = "#ffffff";

btnChangeClr.addEventListener("click",onClickChange);

function onClickChange() {
  const getClr = getRandomHexColor();
  descClr.textContent = getClr;
  bodyBg.style.backgroundColor = getClr;
}