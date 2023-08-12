const inputEl = document.querySelector("#validation-input");
const lengthInputEl = +inputEl.dataset.length;

const inputCheckEl = inputEl.addEventListener("blur", onBlurChange);

function onBlurChange(event) {
    if (event.currentTarget.value.length === lengthInputEl) {
        updateStatus("invalid", "valid");
    } else {
        updateStatus("valid","invalid");
    }
}


function updateStatus(a, b) {
    inputEl.classList.add(a);
    inputEl.classList.remove(b);
}