const form = document.querySelector('#form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const idNumber = document.querySelector('#id');
const output = document.querySelector('#users')
const outputButton = document.querySelector('#user-buttons')
const btnRemove = document.querySelector(".btn-remove")

idNumber.value = create_UUID();
let users = [];







const validateEmail = (email)  => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}


function checkInputs() {


    if(firstName.value === '') {
        setErrorFor(firstName, 'First name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }

    if(lastName.value === '') {
        setErrorFor(lastName, 'Last name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    if(email.value === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!validateEmail(email.value)) {
        setErrorFor(email, 'Must enter a valid Email');
    } else {
        setSuccessFor(email);
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

const renderUser = () => {

    output.innerHTML = '',
    users.forEach(user => {

        let html = `
        <div class="container users">
                <div class="user-text">
                    <h4>${user.firstName} ${user.lastName}</h4>
                    <p>${user.email}</p>
                </div>
                <div id="${user.idNumber}" class="user-buttons">
                    <button class="btn btn-remove">Remove</button>
                    <div class="edit-button">
                        <button class="btn btn-edit">Edit</button>  
                    </div> 
            </div>
        `
        output.innerHTML += html
    })

}

const createUser = (firstName, lastName, email,) => {
    let user = {
        idNumber: create_UUID(),
        firstName,
        lastName,
        email
    }
    
    users.push(user);
    console.log(users)
}


// Genererar ID-nummer

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}



 
form.addEventListener ('submit', (e) => {
    e.preventDefault();

    checkInputs();

    if(firstName.value !== '' && lastName.value !== '' && email.value !== '' && validateEmail(email.value)) {
        createUser(firstName.value, lastName.value, email.value);
        renderUser();
        form.reset();
    }
});

output.addEventListener ('click', (e) => {
    e.preventDefault();
    // console.log("hejhej!")
    users = users.filter(user => (user.idNumber) !== e.target.parentNode.id)
    renderUser();
    console.log(users)
   
});

output.addEventListener ('click', (e) => {
    e.preventDefault();
   
    users = users.find(user => (user.idNumber) !== e.target.parentNode.parentNode.id)
    return user.idNumber
    console.log(user.idNumber)
    
    
   
});







renderUser();