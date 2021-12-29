// Functions in JavaScript

//  We will create a JS program to  multiplication print table of 'n' number 'm' times using functionsand for loop

let n; // n is the number whose multiplication table is to be printed
let m; // m is the number of times the multiplication table is to be printed

function multi_table (n, m) {
    for (let i = 1; i <= m; i++) {
        console.log(n + ' x ' + i + ' = ' + n * i);
    }
}

multi_table(2,10);