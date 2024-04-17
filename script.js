const frm = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const iconVisib = document.querySelector("i");

frm.addEventListener("submit", e => {
    e.preventDefault();
    
    checkInputs();
});

const checkInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue == "") {
        email.className = "form-control rounded-4 border-3 border-danger border-opacity-75";
        iconVisib.className = "bi bi-exclamation-circle-fill text-danger visib";
    } else {
        email.className = "form-control rounded-4 border-3 border-success border-opacity-75";
        iconVisib.className = "bi bi-check-circle-fill text-success visib";
    }
    

    console.log(emailValue);
    console.log(passwordValue);
}