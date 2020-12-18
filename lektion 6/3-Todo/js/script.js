let todos = [
    {
        id: '1',
        title: 'Todo One',
        completed: false
    },
    {
        id: '2',
        title: 'Todo Two',
        completed: false
    },
    {
        id: '3',
        title: 'Todo Three',
        completed: false
    },
]

const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addTodo');
const output = document.querySelector('#todos');

const ListTodos = () => {
    output.innerHTML = ''

    todos.forEach(todo => {
        output.innerHTML += `<div id="${todo.id}" class="bg-white border rounded p-1 d-flex justify-content-between align-items-center mt-1">${todo.title} <button class="btn btn-danger px-3">X</button></div>
        `
    })
}

addBtn.addEventListener('click', (event) => {
    event.preventDefault()

    if(input.value !== '') {
        input.classList.remove('is-invalid')

        let todo = {
            id: Date.now().toString(),
            title: input.value,
            completed: false
        }
        todos.push(todo)

        ListTodos();

        input.value = '';

    } else {
        input.classList.add('is-invalid');
    }
})

output.addEventListener('click', (event) => {
   todos = todos.filter(todo => todo.id !== event.target.parentNode.id)
   ListTodos();
})

ListTodos();