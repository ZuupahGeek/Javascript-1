var employees = [
    {firstName: 'Sofia', lastName: 'Mäkiniemi', age: 22},
    {firstName: 'Joachim', lastName: 'Karlsson', age: 26},
    {firstName: 'Myspotatis', lastName: 'Stjärt', age: 25},
    {firstName: 'Snuskpatte', lastName: 'boffboff', age: 44},
    {firstName: 'Rövhatten', lastName: 'Deluxe', age: 32},
    {firstName: 'Puss', lastName: 'Gurka', age: 434},
    {firstName: 'Korv', lastName: 'Snusking', age: 1314},
]

/* if(1 == 1) {
    console.log(true)
} else {
    console.log(false)
} */

/* employees.forEach(person => {
    const {firstName, lastName} = person

    console.log(firstName[1])
}) */

let sorted = []
let letters = []

employees.forEach(person => {

   
    const {firstName, lastName} = person

    if(sorted.length === 0){
        sorted.push(person);
        letters.push(firstName[0]);
    } else {
    
        letters.push(firstName[0]);
        letters.sort();
    }

    index = letters.indexOf(firstName[0])
    console.log(index)
})

// console.log(letters)
