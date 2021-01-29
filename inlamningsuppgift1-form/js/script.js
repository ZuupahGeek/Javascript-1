const form = document.querySelector('#form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const idNumber = document.querySelector('#id');
const output = document.querySelector('#users')
let formControl = document.querySelector('.form-control')
idNumber.value = create_UUID();  // sätter ett fast värde på "id" i formuläret. Denna är osynlig, och resettar med resten av formuläret
let users = [];

let change = false  // Värde som behövs för att redigera användare
let userId
let matchingEmail = false


const validateEmail = (email)  => {  // Validerar Emailen
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}


function checkInputs() {  // validerar värdena, och ger felmeddelanden om 

    

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
    } else if(matchingEmail == true) {
        setErrorFor(email, 'Email is already registered');
    } else {
        setSuccessFor(email);
    }   
}

function setErrorFor(input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.classList.remove('success');
    formControl.classList.add('error') 
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}



const createUser = (firstName, lastName, email,) => {
    let user = {
        idNumber: create_UUID(),
        firstName,
        lastName,
        email
    }; 
    users.push(user);
}


const renderUser = () => {  //Lägger till en div med värdena jag får in i varje user

    
    output.innerHTML = '',
    users.forEach(user => {
        
        let userContainer = document.createElement('div');
        userContainer.classList.add('container', 'users');

        let userText = document.createElement('div');
        userText.classList.add('user-text');

        let fullName = document.createElement('h4');
        fullName.innerText = `${user.firstName} ${user.lastName}`;

        let emailText = document.createElement('p');
        emailText.innerText = user.email;

        let userButtons = document.createElement('div');
        userButtons.classList.add('user-buttons');
        userButtons.setAttribute('id', `${user.idNumber}`);

        let btnRemove = document.createElement('button');
        btnRemove.classList.add('btn', 'btn-remove');
        btnRemove.innerText = 'Remove';
        btnRemove.addEventListener('click', e => {
            users = users.filter(user => (user.idNumber) !== e.target.parentNode.id);
            renderUser();

        });

        let btnEdit = document.createElement('button');
        btnEdit.classList.add('btn', 'btn-edit');
        btnEdit.innerText = 'Edit';
        btnEdit.addEventListener('click', e => {
            change = true
            firstName.value = user.firstName
            email.value = user.email
            lastName.value = user.lastName
            userId = e.target.parentNode.id

        editUser(e.target.parentNode.id);
        
        });

        userButtons.appendChild(btnEdit);
        userButtons.appendChild(btnRemove);
        userText.appendChild(fullName);
        userText.appendChild(emailText);
        userContainer.appendChild(userText);
        userContainer.appendChild(userButtons);
        output.appendChild(userContainer);


      
    });
}

const editUser = (id) => {  //tillåter ändring i ett object i users-arrayen
    return users.map(user =>{
        if (user.idNumber == id) return {
            idNumber: user.idNumber,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
        } 
        return user
    })   
}

const uniqueEmail = () => {  // får sant värde om email.value redan finns i arrayen users
        users.map(user =>{
        if (email.value == user.email) {
            matchingEmail = true
        } else {
            matchingEmail = false
        }        
    })
};


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

removeSuccessClass = () => {
   firstName.parentNode.classList.remove('success')
   lastName.parentNode.classList.remove('success')
   email.parentNode.classList.remove('success')
};


var addUser = function () {  // om alla villkor möts, läggs användaren till i arrayan.
     uniqueEmail();
    checkInputs();
   

    if(firstName.value !== '' && lastName.value !== '' && email.value !== '' && validateEmail(email.value) && matchingEmail == false) {
        removeSuccessClass();
        createUser(firstName.value, lastName.value, email.value);
        renderUser();
        form.reset();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    if (change == true) {       // om Edit-knappen har tryckts, så uppdateras användaren
        users = editUser(userId);
        change = false;
       
        renderUser();
        form.reset();
        removeSuccessClass();
        return
    } else {                    // om Edit-knappen eh tryckts på, så submitar formuläret som vanligt       
        addUser();
    }    
});
renderUser();