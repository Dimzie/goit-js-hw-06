const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const defaultName = "Anonymous";

const changeInputEl = inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        return spanEl.textContent = defaultName;
    } else {
        return spanEl.textContent = event.currentTarget.value;
    }
}