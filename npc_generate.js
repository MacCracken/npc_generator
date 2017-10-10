// Returns a random integer between min (included) and max (included)
var fs=require('fs');
var ideals=JSON.parse(fs.readFileSync('ideals.json'));
var chars=JSON.parse(fs.readFileSync('characteristics.json'));
var bonds=JSON.parse(fs.readFileSync('bonds.json'));
var flaws=JSON.parse(fs.readFileSync('flaws.json'));
var first=JSON.parse(fs.readFileSync('first.json'));
var middle=JSON.parse(fs.readFileSync('middle.json'));
var last=JSON.parse(fs.readFileSync('last.json'));
var first_name = first[getRandomInt(1,20)] + middle[getRandomInt(1,20)] + last[getRandomInt(1,20)]
var last_name = first[getRandomInt(1,20)] + middle[getRandomInt(1,20)] + last[getRandomInt(1,20)]

var npc_character = new Object();
npc_character["Name"] = first_name + " " + last_name;
npc_character["Characteristics"] = chars[getRandomInt(1,20)];
npc_character["Ideals"] = ideals[getRandomInt(1,20)];
npc_character["Bonds"] = bonds[getRandomInt(1,10)];
npc_character["Flaws"] = flaws[getRandomInt(1,12)];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("--------------------------")
console.log("D&D 5E NPC Generator v 1.0")
//console.log(npc_character)
console.log("Name: " + npc_character["Name"]);
console.log("Characteristics: " + npc_character["Characteristics"]);
console.log("Ideals: " + npc_character["Ideals"]);
// needs changes for 10 roll
console.log("Bonds: " + npc_character["Bonds"]);
console.log("Flaws: " + npc_character["Flaws"]);
console.log("--------------------------")
