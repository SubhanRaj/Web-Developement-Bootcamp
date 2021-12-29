var string1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus ex alias quas error ipsa saepe.\n"
console.log(string1);
var string2 = 'hello world';
console.log(string2);
// If we need to use "" in string, we use '' to avoid the error
var string3 = 'Samual L Jackson once said "You MF Bitch" ';
console.log(string3);
// If we need to use '' in string, we use "" to avoid the error
var string4 = "He's One, I Love Most!";
console.log(string4);

var name = '30 Days of Code';
var message = "I'm doing the challange";
var prepositon = 'of';
console.log(message + ' ' + prepositon + ' ' + name);
// The '+' operator concatenates the strings.
// The '' adds empty space between the strings.
// console.log prints the string to the console.
var temp = `Subhan's phone says:"${message} ${name} to become good at coding" `;
console.log(temp);
// The `` can be used if we want to use the string as a string without using the + operator & it can also allow us to use both "" and '' in the string.
// The ${} is used to add the string to the string.
var y = new String("This is a string");
console.log(y);
// This prints the string to the console with the new String function.
// new String is used to create a new string.
// The string is created with the string constructor.

document.getElementById('content').innerHTML = '<h3> This is a h3 heading </h3>'
// This is used to insert a h3 tag into the content div by using the id of the content div.