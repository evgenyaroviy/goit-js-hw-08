const throttle = require('lodash.throttle');


const LOCALSTORAGE_KEY = "feedback-form-state"; 

const formRef = document.querySelector('form');
formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);



function onFormInput(e) {
    const userMail = formRef.querySelector('input').value;
    const userMessage = formRef.querySelector('textarea').value;
    const state = {
        email: `${userMail}`,
        message: `${userMessage}`
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
}  


function onFormSubmit(e) {
    e.preventDefault();
    console.log(`${LOCALSTORAGE_KEY}:`, JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    e.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

formInputValueFromLocalStorage();
function formInputValueFromLocalStorage() {
    const savedInfo = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedInfo) {
        const saveInfoObj = JSON.parse(savedInfo);
        formRef.querySelector('input').value = saveInfoObj.email;
        formRef.querySelector('textarea').value = saveInfoObj.message;
    }
}