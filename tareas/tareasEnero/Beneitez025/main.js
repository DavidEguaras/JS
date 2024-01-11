const form  = document.getElementsByTagName('form')[0];  

const nombre = document.getElementById('nombre'); 
const nombreError = document.querySelector('#nombre + span.error');

const email = document.getElementById('mail'); 
const emailError = document.querySelector('#mail + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const repePassword = document.getElementById('repePassword');
const repePasswordError = document.querySelector('#repePassword + span.error');

const age = document.getElementById('age');
const ageError = document.querySelector('#age + span.error');

const gender= document.getElementById('gender');
const genderError = document.querySelector('#gender + span.error');

const terms = document.getElementById('terms');
const termsError = document.querySelector('#terms + span.error');



form.addEventListener('submit', (event) => {
    if(!form.checkValidity()) {
        event.preventDefault();
    }
    nombreError.textContent = nombre.validationMessage;   
    emailError.textContent = email.validationMessage; 
    passwordError.textContent = password.validationMessage;
    repePasswordError.textContent = repePassword.validationMessage;
    ageError.textContent = age.validationMessage; 
    genderError.textContent = gender.validationMessage;
    termsError.textContent = terms.validationMessage;
}); 