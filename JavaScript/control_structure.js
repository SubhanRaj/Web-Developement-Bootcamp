/* Control Structures in JavaScript */

// There are three types of control structures in JavaScript:
// 1. Conditional statements
// 2. Iterative statements
// 3. Switch statements

// Lets start with conditional statements

// if, if-else, if-else-if, if-else-if-else are conditional statements


let age = 17;
age = parseInt(age);
if (age < 18) {
    console.log("You are not eligible to vote");
} else if (age > 18 && age < 21) {
    aconsole.log("You are eligible to vote but you have to wait for your next election");
} else {
    console.log("You are eligible to vote");
}



// Switch statements
// switch statements are used to execute different blocks of code based on the value of a variable

// switch var {
//     case value1:
//         // do something
//         break;
//     case value2:
//         // do something
//         break;
//     case value3:
//         // do something
//         break;
//     default:
//         // do something else
//         break;
// }

// switch statements can also be used to compare multiple values

// switch var {
//     case value1, value2:
//         // do something
//         break;
//     case value3:
//         // do something

