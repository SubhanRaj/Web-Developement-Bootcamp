var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("**********************************************************");
//# sourceMappingURL=loops.js.map
arr.forEach(function (element) {
    console.log(element);
})
console.log("**********************************************************");
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
console.log("**********************************************************");
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);