const formEl = document.querySelector(".login-form");

const onSubmitEl = formEl.addEventListener("submit", onClickSubmit);

function onClickSubmit(evt) {
    evt.preventDefault();
    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    if ((email && password) === "") {
        return alert("Вы не заполнили формы!")
    }

    const formObj = {email, password};
    console.log(formObj);

    evt.target.reset();
}