const btnDercEl = document.querySelector("[data-action=decrement]");
const btnIncrEl = document.querySelector("[data-action=increment");
const valueEl = document.querySelector("#value");

let counterValue = 0;

btnDercEl.addEventListener("click", decrBtnClick);

function decrBtnClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

btnIncrEl.addEventListener("click", incrBtnClick);

function incrBtnClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}