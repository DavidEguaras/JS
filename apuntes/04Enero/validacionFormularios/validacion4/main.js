const form  = document.getElementsByTagName('form')[0];  
const nombre = document.getElementById('nombre'); 
const nombreError = document.querySelector('#nombre + span.error');
const email = document.getElementById('mail'); 
const emailError = document.querySelector('#mail + span.error');  
form.addEventListener('submit', (event) => {
    if(!form.checkValidity()) {
        event.preventDefault();
    }
    nombreError.textContent = nombre.validationMessage;   
    emailError.textContent = email.validationMessage; 
}); 