const throttle = require('lodash.throttle');


const LOCALSTORAGE_KEY = "feedback-form-state"; 

const formRef = document.querySelector('form');
const inputRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');

inputRef.addEventListener('input', onMailInput)
messageRef.addEventListener('input', onMessageInput)
formRef.addEventListener('submit', onFormSubmit);

function onMailInput(e) {
    // const email = e.target.value;
    
    localStorage.setItem('email', e.target.value)
    
};
function onMessageInput(e) {
    // const message = e.target.value;
    
    localStorage.setItem('message', e.target.value)
};
function onFormSubmit(e) {
    e.preventDefault();
    const userObjact = `${localStorage.getItem('email')}, ${localStorage.getItem('message')}`;
    console.log(userObjact)
    e.target.reset();
};



