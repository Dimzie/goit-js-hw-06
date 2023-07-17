function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy");
const boxesEl = document.getElementById("boxes");

createBtnEl.addEventListener("click", getAmount);

function addBoxes(amount) {
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = boxSize + "px";
    newBox.style.height = boxSize + "px";
    newBox.style.backgroundColor = getRandomHexColor();

    boxSize += 10;

    boxesEl.append(newBox);
  }
}

function getAmount() {
  const value = inputEl.value;
  addBoxes(value);
}

destroyBtnEl.addEventListener("click", () => {
  inputEl.value = "";
  boxesEl.innerHTML = "";
})