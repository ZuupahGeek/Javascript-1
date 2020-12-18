const btn = document.querySelector('#btnAlert');

const form = document.querySelector('#loginForm')
/* btn.addEventListener('click', function(){
    alert('Warning!')
    console.log('warning warning')
}) */
/* 
btn.addEventListener('dblclick', () => {
    console.log('Warning warning')
})

btn.addEventListener('mousedown', () => {
    console.log('mousedown')
})

btn.addEventListener('mouseup', () => {
    console.log('mouseup')

})

    btn.addEventListener('mouseenter', () => {
    console.log('mouseenter')
}) */

form['firstName'].addEventListener('keyup', (event) => {
    console.log(event.key)
})

form['firstName'].addEventListener('keydown', (event) => {
    console.log(event.key)
})

form['firstName'].addEventListener('focus', function(event) {
    console.log('Fokus')
    this.classList.add('focus');
})

form['firstName'].addEventListener('blur', function(event) {
    console.log('blur')
    this.classList.add('focus');
})


form.addEventListener('submit', (event) => {
    event.preventDefault()
    

    console.log('validerar förmulär')
    console.log('validering klar! Skickar till databasen')
})