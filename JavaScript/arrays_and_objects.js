let Info = {
    name: "Subhan",
    age: 19,
    Educational_Status: "Graduation",

}

console.log(Info);

/* Arrays in JavaScript */

// In JavaScript arrays are collection of similar data types
// Creating array in same way as C/C++
let GTA_Games = ["GTA III", "GTA Vice City", "GTA San Andreas", "GTA IV", "GTA V"];

for (var i = 0; i < GTA_Games.length; i++) {
    console.log("The", i + 1, "GTA Game was", GTA_Games[i]);
}

// Creating array using new keyword
// by using new keyword an arrays works as an object
console.log("\n");
let best_gta_games = new Array("GTA San Andreas", "GTA IV", "GTA V", "GTA Vice City", "GTA III");

for (var i = 0; i < best_gta_games.length; i++) {
    console.log("#", i + 1, "GTA Game was", best_gta_games[i]);
}