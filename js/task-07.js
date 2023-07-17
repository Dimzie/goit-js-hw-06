const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

const fontSizeControl = inputEl.addEventListener("input", onSizeCheck);

function onSizeCheck(event) {
    const inputValue = event.currentTarget.value;
    spanEl.style.fontSize = inputValue + "px";
}