var str = 'This is a string';
console.log(str);
/* indexOf Function: give the first occurance of a substring */
var position = str.indexOf('a');
console.log(position);
// last occurance of a substring

position = str.lastIndexOf('is');
console.log(position);
var str = 'This is a string';
console.log(str);
var position = str.indexOf('is');
console.log(position);
// This gives position of first occurance of substring
position = str.lastIndexOf('is'); // We don't need to use var again & can use 'is' directly
console.log(position);
// This gives position of last occurance of substring
//  Question : write a JavaScrpit function to find the length of a string
var length = str.length;
console.log(length);
// This gives length of string