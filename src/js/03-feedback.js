const throttle = require('lodash.throttle');


const LOCALSTORAGE_KEY = "feedback-form-state"; 

const formRef = document.querySelector('form');
const inputRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');

inputRef.addEventListener('input', onMailInput)
messageRef.addEventListener('input', onMessageInput)
formRef.addEventListener('submit', onFormSubmit);

function onMailInput(e) {
    const email = e.target.value;
    
    localStorage.setItem('email', email)
};
function onMessageInput(e) {
    const message = e.target.value;
    
    localStorage.setItem('message', message)
};
function onFormSubmit(e) {
    e.preventDefault();
    console.log(`${onMailInput()}, ${onMessageInput()}`)
    e.target.reset();
};


localStorage.setItem(LOCALSTORAGE_KEY, 2);

const x = localStorage.getItem(LOCALSTORAGE_KEY)
console.log(x)