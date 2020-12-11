// methods
/*
    let names = []
    names.push();
 */
    
 /*    let user = {
        fullName: funtion(){
            return ''
        }
    }
    user.fullName()
*/


// Functions
// Till för att underlätta och att slippa repetera sig

    /* function calc(num1, num2) {
        let sum = num1 + num2
        console.log(sum);
    }

    calc(1,1)
    calc(5,5) */

     /*    const calc = () => {

        } */


// Functions with parameters

        /* function funcName1(firstName, lastName) {
            let fullName = `${firstName} ${lastName}`
            console.log(fullName.trim())
        }

        const funcName2 = (firstName, lastName) => {
            let fullName = `${firstName} ${lastName}`
            console.log(fullName.trim())
        }

        funcName1("Joche", "Karlsson")
        funcName2("Sofia", "Mäkiniemi") */



// callback functions
        const funcName = (callback) => {
            let value = 'hej'
            callback(value);
        }

        funcName(value => {
            console.log(value)
        });


