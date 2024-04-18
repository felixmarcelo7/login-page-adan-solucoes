const frm = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const iconVisib = document.querySelectorAll(".icone");
const span = document.querySelectorAll("span");

frm.addEventListener("submit", e => {
    e.preventDefault();
    
    checkInputs();
});

const checkInputs = () => { //verifica se o input está vazio
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue == "") {
        email.className = "form-control rounded-4 border-3 border-danger border-opacity-75";
        iconVisib[1].className = "bi bi-exclamation-circle-fill text-danger visib";
        iconVisib[0].className = "bi bi-check-circle-fill text-success";
        span[0].className = "position-absolute mt-1 ms-2 fs-6 text-danger"
    } else {
        email.className = "form-control rounded-4 border-3 border-success border-opacity-75";
        iconVisib[1].className = "bi bi-exclamation-circle-fill text-danger";
        iconVisib[0].className = "bi bi-check-circle-fill text-success visib";
        span[0].className = "position-absolute mt-1 ms-2 fs-6 text-danger d-none"
    }

    if(passwordValue == "") {
        password.className = "form-control rounded-4 border-3 border-danger border-opacity-75";
        iconVisib[3].className = "bi bi-exclamation-circle-fill text-danger visib";
        iconVisib[2].className = "bi bi-check-circle-fill text-success";
        span[1].className = "position-absolute mt-1 ms-2 fs-6 text-danger"

    } else {
        password.className = "form-control rounded-4 border-3 border-success border-opacity-75";
        iconVisib[3].className = "bi bi-exclamation-circle-fill text-danger";
        iconVisib[2].className = "bi bi-check-circle-fill text-success visib";
        span[1].className = "position-absolute mt-1 ms-2 fs-6 text-danger d-none"
    }
}