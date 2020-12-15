// kommentarer

/* alt + shift + a */
// ctrl + *      



/* 
    CONSOLE

    Använd för felsökning. Är typ den enda felsökningsmetoden vi har.
    Anvnds bara i utvecklingsmiljö. ej i produktionsmiljö (undantag finns)


    I webbläsaren:  Inspektera -> Console
*/

console.log(".log() = informationstext")
console.warn(".warning() = varningstext")
console.error(" .error() = felmeddelandetext")


/*
 DOM - Document Object Model
 */

//  document.body.innerText = "Detta är en text"

// document.getElementById('results').innerHTML = "Detta är resultatet"

/* 
        Deklarera variabler
    name        = "Joche"
    var name    = "Joche"
    let name    = "Joche"
    const name  = "Joche"
*/

   /*  name = "Joche"          //Global deklarering (gör inte såhär)
    var namn = "Joche"      //Globar deklarering

    let firstName = "Joche"      //lokal deklarering (gör så här!)
    const lastName = "Karlsson" // Konstant värde, kan inte deklareras om!!


    

    console.log(name);
    console.log(firstName);
    console.log(lastName); */

    /* 
                Data Types

    Variabel    =       nåt vi lagrar information i

    String      =       text
    Number      =       Heltal, decimaltal
    Boolean     =       Sant/falskt värde (true/false)
    null        =       totalt tomt
    Undefined   =       Odefinierat värde
    Object      =       objekt/class som innehåller ett eller fler värden
    Array       =       Lista med värden

    camelCase   =       Javascript, Java, C, C++
    Pascal      =       C#, Pascal, Turbo Pascal (C, C++)
    _private    =       en variabel som "bara" lever inom en viss del.

    ex. Camelcase   =   firstName, lastName, email, postalCode, city, ssn, 

    _firstname  =       Joche
    firstName   =       _firstName

*/


//  String
    name = "Joche"
    name = 'Joche'
    name = `Joche`  // Shift + ´
    age = `26`

    text = "Jag är \"bäst\" i hela världen"
    text = 'Jag är "bäst" i hela världen'
    text = 'Jag är "bäst" i \'hela\' världen'
    text = `Jag är "bäst" i 'hela' världen`

    text = `Jag heter ` + name + ` och är ` + age + ` år gammal`
    text = `Jag heter ${name} och är ${age} år gammal`  // går bara med ``, ej "" eller ''


    text.length     //antalet tecken i en variabel
    text.indexOf()  //Hitta var ordet du letar efter börjar
    text.replace()  //ersätter ett ord i strängen med att annat ord
    text.toUpperCase()
    text.toLowerCase()
    text.concat()
    text.trim()


    console.log(text.trim(text))


// Number

/* 
    +       lägg till
    -       ta bort
    *       gångra
    /       dela
    %       division remainder
    ++      öka med 1
    --      minska med 1
 
    =       lika med
    +=      lägg till
    -=      ta bort från
    *=      gångra och lägg till
    /=      dela och lägg till
    %=      division remainder

*/

    let num1 = 1
    let num2 = 5

console.log(num1 + num2)
console.log(num1 += num2)


//  Boolean
    let status = true
        status = false
    console.log(status)


// null och undefined

    // null är ingenting, har inget värde, har ingen datatyp    
    // men null i Javascript är samma som ett tomt objekt

    let middleName = null

    console.log(typeof middleName)