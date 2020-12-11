/* switch(value) {
    case compare-value:
        action
        break;
    case compare-value:
        action
        break;

    default:
        action
        break;

}
 */
let value = 5;

switch(value) {
    case 1: { console.log('värdet är ett'); break;}
    case 2: { console.log('värdet är två'); break;}
    case 3: { console.log('värdet är tre'); break;}
    case 4: { console.log('värdet är fyra'); break;}
    case 5: { console.log('värdet är fem'); break;}

    default: { console.log('värdet finns inte i switchen'); break;}
}