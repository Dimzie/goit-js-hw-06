const inputEl = document.querySelector("#validation-input");
const lengthInputEl = +inputEl.dataset.length;

const inputCheckEl = inputEl.addEventListener("blur", onBlurChange);

function onBlurChange(event) {
    if (event.currentTarget.value.length === lengthInputEl) {
        isValid();
    } else {
        isInvalid();
    }
}

function isValid() {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid")   
}

function isInvalid() {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid"); 
}