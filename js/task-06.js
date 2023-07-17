const inputEl = document.querySelector("#validation-input");
const lengthInputEl = +inputEl.dataset.length;

const inputCheckEl = inputEl.addEventListener("blur", onBlurChange);

function onBlurChange(event) {
    if (event.currentTarget.value.length === lengthInputEl) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid")
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
}