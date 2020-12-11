/* 
        Loopar
*/


let names = ['Joche', 'Sofia', 'Prutten', 'Snusk']

/* // array foreach loop
names.forEach((name, index) => {
    console.log(name)
})

// for-loop
for (let i=0; i < names.legth; i++){
    console.log(i + " " + names[i]);
}

// foreach-loop
for (let name of names) {
    console.log(name)
} */


// while
let index = 0;

    /* while (index < names.length) {
        console.log(names[index])
        index++;
    } */

// do-while - kommer göra actions minst en gång
    /* do {
        console.log(names[index])
    index++;
    } while(index < names.length) */

/* 
    while/do-while: används tills ett visst tillstånd
    är uppnått. 

        "Är jag uppkopplad? nej okej, då försöker jag koppla upp mig i nätet."
        "så länge det är för varmt, kör fläkten"

    for-of : när vi vill loopa igenom alla objekt oavsett hur många det är.
    Som i en array eller liknande

    .forEach: När vi vill loopa igenom alla värden i en Array

    for: nä vi vill loopa ett givet/visst antal gånger såsom
    "Visa de 10 senaste meddelandena"
    
    
*/