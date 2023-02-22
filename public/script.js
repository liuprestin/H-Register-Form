const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    //uses Contraint API
    isValid = form.checkValidity();
    //Style main message for an error
    if (!isValid) {
        message.textContent = "please fill out all fields.";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
    }
    //check to see if passwords match
    if (password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
        return;
    } else {
        passwordsMatch = false;
        message.textContent = "Make sure the passwords match.";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    //if form is valid and passwords match 
    if (isValid && passwordsMatch) {
        message.textContent = "Successfully registered!"
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

//note: probably not a secure way to store this data!
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
} //this would be sent somewhere 

function processFormData(e){
    e.preventDefault(); //note: there is no backend...
    //Validate the form
    validateForm();
    if (isValid && passwordsMatch){
        storeFormData();
    }
}

//Event Listener
form.addEventListener('submit', processFormData);