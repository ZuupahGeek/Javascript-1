const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const output = document.querySelector('#output');
let error = document.querySelector('.error-message');
let todos = [];

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
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
    card.classList.add('card', 'p-3', 'my-3', 'todo');

    let innerCard = document.createElement('div');
    innerCard.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    
    let title = document.createElement('h4');
    title.classList.add('title');
    title.innerText = todo.title;

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.innerText = 'X';
    button.addEventListener('click', (e) => {
        removeTodo();
    });

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

    fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title,
            completed: false
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        todos.unshift(data);
        listTodos();
    })
}

const validateTodo = () => {
    
    if(input.value === '') {

        input.classList.add('is-invalid');
        error.innerText = ('Cannot be blank');
       
    } else {
        input.classList.remove('is-invalid');
        error.innerText = ('');
        createTodo(input.value);
        console.log('hejhej');
       
    }
}

const removeTodo = async () => {
    console.log('Bortaaa');
    let todoTitle = document.querySelector('.title');
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const res = await fetch(url);
    const data = await res.json();
        data.filter(data => (data.title) !== todoTitle);
        listTodos();
    
}


form.addEventListener('submit', e => {
    e.preventDefault();
   
    validateTodo();
    form.reset();
    
  })