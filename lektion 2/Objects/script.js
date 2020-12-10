/* DATA TYPES */

// Object - object innehåller ett eller flera värden
/* person = {}
var person = {}
let person = {}
const person = {}  */

// används för klasser, object och json
// använder sig av key:value pairs

// JS Object
/* var person = {
    firstName: `Joche`, //firstName = Key, Joche = Value
    lastName: `Karlsson`
} */

// convert to Json
/* var json = JSON.stringify(person)
console.log(json) */

// js Object
/* var person = {
    "firstName": "Joche", //firstName = Key, Joche = Value
    "lastName": "Karlsson"
} */

/* var person = {
    firstName : `Joche`,
    lastName: `Karlsson`,
    middleName: `Lars`,
    face: {
        hair: `brown`,
        eyes: `green`
    },
    isEnabled: true,
    height: 180.1,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    favoColors: [`yellow`, `green`, `blue`],
} */
// person.fullName()

// console.log(person.fullName());

// var json = JSON.stringify(person)
// console.log(json)
/* 
person.firstName
console.log(person.face.hair)

person[`firstName`]
console.log(person[`firstName`])
console.log(person.height) */

// console.log(person.favoColors[0])