// Alert

// In JavaScript alert() function displays a in-browser alert

alert("Hi, this is my first JavaScript Alert")
// It does not return anything

// prompt - prompt() is used for User Input
// We will use prompt to take value of n & m and then print a multiplication table as follows


let n = prompt("Enter the value of n", "2"); // n is the number whose multiplication table is to be printed
let m = prompt("Enter the value of m", "10") // m is the number of times the multiplication table is to be printed

function multi_table(n, m) {
    for (let i = 1; i <= m; i++) {
        console.log(n + ' x ' + i + ' = ' + n * i);
    }
}
multi_table(n, m);

// Confirm
// We use it to confirm something

let deleteFile = confirm("This action cannot be undone, deleting this file form server is permanent, do you really want to delete this file?");
if (deleteFile) {
    alert("Your file is deleted");
} else {
    alert("make sure before touching this button");
}