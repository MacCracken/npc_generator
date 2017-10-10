// Returns a random integer between min (included) and max (included)
const dice = require('./dice');
var fs=require('fs');
var ideals=JSON.parse(fs.readFileSync('ideals.json'));
var chars=JSON.parse(fs.readFileSync('characteristics.json'));
var bonds=JSON.parse(fs.readFileSync('bonds.json'));
var flaws=JSON.parse(fs.readFileSync('flaws.json'));
var first=JSON.parse(fs.readFileSync('first.json'));
var middle=JSON.parse(fs.readFileSync('middle.json'));
var last=JSON.parse(fs.readFileSync('last.json'));
var first_name = first[dice.rollD20()] + middle[dice.rollD20()] + last[dice.rollD20()];
var last_name = first[dice.rollD20()] + middle[dice.rollD20()] + last[dice.rollD20()];

var npc_character = new Object();
npc_character["Name"] = first_name + " " + last_name;
npc_character["Characteristics"] = chars[dice.rollD20()];
npc_character["Ideals"] = ideals[dice.rollD20()];
npc_character["Bonds"] = bonds[dice.rollD10()];
npc_character["Flaws"] = flaws[dice.rollD12()];


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
