const formEl = document.querySelector(".login-form");
const btnEl = formEl.querySelector("button");

let formObj= {};

const onSubmitEl = formEl.addEventListener("submit", onClickSubmit);

function onClickSubmit(evt) {
    evt.preventDefault();
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    if ((email && password) === "") {
        alert("Вы не заполнили формы!")
    }

    formObj = {email, password};
    console.log(formObj);
    formEl.reset();
}