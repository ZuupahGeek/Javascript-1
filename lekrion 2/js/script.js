/* DATA TYPES */

// Object - object innehåller ett eller flera värden
/* person = {}
var person = {}
let person = {}
const person = {}  */

// används för klasser, object och json
// använder sig av key:value pairs

// JS Object
var person = {
    firstName: `Joche`, //firstName = Key, Joche = Value
    lastName: `Karlsson`
}

// convert to Json
var json = JSON.stringify(person)
console.log(json)

// js Object
var person = {
    "firstName": "Joche", //firstName = Key, Joche = Value
    "lastName": "Karlsson"
}