const form = document.querySelector('#form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const identification = document.querySelector('#id');


form.addEventListener ('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


document.getElementById('id').value = create_UUID();

function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const idValue = create_UUID();

    if(firstNameValue === '') {
        setErrorFor(firstName, 'First name cannot be blank');
    } else {
        setSuccessFor(firstName);
        addFirstName(firstName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be blank');
    } else {
        setSuccessFor(lastName);
        addLastName(lastName);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!validateEmail(emailValue)) {
        setErrorFor(email, 'Must enter a valid Email');
    } else {
        setSuccessFor(email);
        addemail(email);
    }

    
}


function setErrorFor(input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const validateEmail = (email)  => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

var firstNameArray = [];
var lastNameArray = [];
var emailArray = [];
var idArray = [];




function addFirstName () {
    firstNameArray.push(firstName.value)
}
function addLastName () {
    lastNameArray.push(lastName.value)
}
function addemail () {
    emailArray.push(email.value)
}
function addID () {
    idArray.push(idValue)

}






console.log(firstNameArray[0])
console.log(lastNameArray[0])
console.log(emailArray[0])
console.log(idArray[0])