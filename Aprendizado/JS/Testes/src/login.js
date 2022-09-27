function setFormMessage(formElement, type, message) {
    const msgElement = formElement.querySelector(".form__message");

    msgElement.textContent = message;
    msgElement.classList.remove("form__message--success", "form__message--error");
    msgElement.classList.add(`form_message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-msg").textContent = message;
}

function clearerror(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-msg").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createaccform = document.querySelector("#createacc");

    document.querySelector("#linkSignup").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createaccform.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        createaccform.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });


    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupuser" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            };
        });

        inputElement.addEventListener("input", e => {
            clearerror(inputElement);
        })
    });
});

