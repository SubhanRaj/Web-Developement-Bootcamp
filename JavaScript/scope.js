var string1 = "This is a string";
var string1 = "This is also a string";
console.log(string1);
// here the string1 variable get overloaded by the second string
// because the scope of var is global

for (let a = 0; a <= 20;a++) {
    console.log(a);

}
// for this loop, the scope of a is in the loop

var a = 100;
console.log(a);
a++;
console.log(a);
// here a value of a prints as 100, because we are using global variable a, not he local variable a

// const : Something, whose value need to be constant

const age_to_be_voted = 18;

if (age_to_be_voted >= 18)
{
    console.log ("You're eligiable to vote");
}

// age_to_be_voted = 15

// here, this will give error, as we can't redeclare a const

