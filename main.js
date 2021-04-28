//exo1;
// let myfunction =(txt1, txt2)=> {
//     return  console.log(txt1 + txt2);
// }
// myfunction("Bonjour ","kevin")
//exo2
// let myfunction = (txt1, txt2) => {
//     return console.log(txt2 - txt1);
// }
// myfunction(14,5)
//exo3
// let myfunction = (txt1, txt2) => {
//     return console.log(txt2 * txt1);
// }
// myfunction(14,5)
//exo4
// let myfunction = (txt1, txt2) => {
//     return console.log(txt2 / txt1);
// }
// myfunction(14,25)
//ex05
// let myfunction = (txt1, txt2) => {
//     return console.log(txt2 % txt1);
// }
// myfunction(14,5)
//exo6
// let myfunction = (txt1 )=> {
//     return console.log(txt1*txt1);
// }
// myfunction(14)
//exo7
// let myfunction = (txt1, txt2) => {
//     return console.log( txt1** txt2);
// }
// myfunction(14,5)
//exo8
// let capitalize = (nbr1) => {
//     return console.log(nbr1.charAt(0).toUpperCase()+nbr1.substr(1));

// }
// capitalize("mama")
//exo9
// let nbr1 = parseInt(prompt('nbr1'))
// let operator = prompt('operateur')
// let nbr2 = parseInt(prompt('nbr2'))

let calcul = (nbr1, operator, nbr2) => {
    let rslt1 = nbr1 + nbr2
    let rslt2 = nbr1 - nbr2
    let rslt3 = nbr1 * nbr2
    let rslt4 = nbr1 / nbr2
    switch (operator) {
        case "+":
            return console.log(`${nbr1} ${operator} ${nbr2} = ${rslt1}`);
        case "-":
            return console.log(`${nbr1} ${operator} ${nbr2} = ${rslt2}`);

        case "*":
            return console.log(`${nbr1} ${operator} ${nbr2} = ${rslt3}`);

        case "/":
            return console.log(`${nbr1} ${operator} ${nbr2} = ${rslt4}`);

        default:
            break;
    }
}
calcul(15, "-", 5);