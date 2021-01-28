const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const output = document.querySelector('#output');
let error = document.querySelector('.error-message');
let todos = [];

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json())
    .then(data => {
        todos = data;
        console.log(todos);
        listTodos();
    })
}
fetchTodos();

const newTodo = (todo) => {

    let card = document.createElement('div');
    card.classList.add('card', 'p-2', 'my-3', 'todo');
    card.setAttribute('id', `${todo.title}`)

    let innerCard = document.createElement('div');
    innerCard.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    
    let title = document.createElement('h4');
    title.classList.add('title');
    title.innerText = todo.title;
    title.addEventListener('click', (e) => {

        if (todo.completed == false){
        todo.completed = true;
        card.classList.add('todo-completed')
        } else {
            todo.completed = false;
            card.classList.remove('todo-completed')
        }
    })

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.innerText = 'X';
    button.addEventListener('click', (e) => {

            if (todo.completed == true) {
        todos = todos.filter(todo => (todo.title) !== e.target.parentNode.parentNode.id);
        listTodos();
        console.log(todos) 
        }
       
    })

    innerCard.appendChild(title);
    innerCard.appendChild(button);
    card.appendChild(innerCard);
    output.appendChild(card);
}


const listTodos = () => {
    output.innerHTML = '';
    todos.forEach(todo => {
     
        newTodo(todo);
    })
}


const createTodo = (title) => {

    fetch('https://jsonplaceholder.typicode.com/todos/',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title,
            completed: false,
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        todos.unshift(data);
        listTodos();
    });
}

const validateTodo = () => {
    
    if(input.value === '') {

        input.classList.add('is-invalid');
        error.innerText = ('Cannot be blank');
       
    } else {
        input.classList.remove('is-invalid');
        error.innerText = ('');
        createTodo(input.value);
       
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
   
    validateTodo();
    form.reset();
    console.log(todos)
    
  });