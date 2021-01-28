const form = document.querySelector('#form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const idNumber = document.querySelector('#id');
const output = document.querySelector('#users')
const outputButton = document.querySelector('#user-buttons')


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


const createUser = (firstName, lastName, email,) => {
    let user = {
        idNumber: create_UUID(),
        firstName,
        lastName,
        email
    };
    
    users.push(user);
    console.log(users);
}


const renderUser = () => {

    
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
            console.log('ta bort, lol');
            users = users.filter(user => (user.idNumber) !== e.target.parentNode.id);
            renderUser();
        });

        let btnEdit = document.createElement('button');
        btnEdit.classList.add('btn', 'btn-edit');
        btnEdit.innerText = 'Edit';
        btnEdit.addEventListener('click', e => {
            console.log('ändra användare, lol');
            form.removeEventListener('submit', addUser);
            userIndex = users.findIndex((user => user.idNumber === e.target.parentNode.id))
        
        editUser();
        
        });

        userButtons.appendChild(btnEdit);
        userButtons.appendChild(btnRemove);
        userText.appendChild(fullName);
        userText.appendChild(emailText);
        userContainer.appendChild(userText);
        userContainer.appendChild(userButtons);
        output.appendChild(userContainer);


       /*  let html = `
        <div class="container users">
                <div class="user-text">
                    <h4>${user.firstName} ${user.lastName}</h4>
                    <p>${user.email}</p>
                </div>
                <div id="${user.idNumber}" class="user-buttons">
                    <button class="btn btn-remove">Remove</button>
                        <button class="btn btn-edit">Edit</button>
            </div>
        `
       output.innerHTML += html;
        let btnRemove = document.querySelector(".btn-remove");
        let btnEdit = document.querySelector(".btn-edit")
   

   

        btnRemove.addEventListener('click', e => {
            console.log('ta bort');
            users = users.filter(user => (user.idNumber) !== e.target.parentNode.id);
            renderUser();
        });

        btnEdit.addEventListener('click', e => {
            console.log('ändra');
            
        userIndex = users.findIndex((user => user.idNumber == e.target.parentNode.id))
        
        editUser();
        renderUser();
        })
         */
    });
}

const editUser = () => {
    console.log(users[userIndex])
    firstName.value =  users[userIndex].firstName
    lastName.value =  users[userIndex].lastName
    email.value =  users[userIndex].email
    idNumber.value = users[userIndex.idNumber]

   

    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('ny submit funkar')
        users[userIndex].firstName = firstName.value;
        users[userIndex].email = email.value;
        users[userIndex].lastName = lastName.value;

        console.log(users[userIndex])

       form.reset();
        form.addEventListener('submit', addUser);
    })
    renderUser();
    
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



 
/* form.addEventListener ('submit', (e) => {
    e.preventDefault();

    checkInputs();

    if(firstName.value !== '' && lastName.value !== '' && email.value !== '' && validateEmail(email.value)) {
        createUser(firstName.value, lastName.value, email.value);
        renderUser();
        form.reset();
    }
}); */

var addUser = function (event) {
    event.preventDefault();
    checkInputs();

    if(firstName.value !== '' && lastName.value !== '' && email.value !== '' && validateEmail(email.value)) {
        createUser(firstName.value, lastName.value, email.value);
        renderUser();
        form.reset();
    }
}

form.addEventListener('submit', addUser);







renderUser();