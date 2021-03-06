const refs = {
    form: document.querySelector(".login-form"),
    inputEmail: document.getElementsByName('email'),
    inputPassword: document.getElementsByName('password'),
    submit: document.querySelector('[type="submit"]'),
}

let formObject = {};

    refs.form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    formObject.email = email.value;
    formObject.password = password.value;
    
    if (email.value === "" || password.value === "") {
        alert("Всі поля мають бути заповнені!");
    } else {
        console.log(formObject);
    }

     event.currentTarget.reset();

}