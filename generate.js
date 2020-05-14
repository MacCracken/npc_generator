// Returns a random integer between min (included) and max (included)
import { rollD20, rollD10, rollD12 } from './dice.js';
import { readFileSync } from 'fs';

function parse(filename) {
  return JSON.parse(readFileSync(filename))
}

var ideals=parse('ideals.json');
var chars=parse('characteristics.json');
var bonds=parse('bonds.json');
var flaws=parse('flaws.json');
var first=parse('first.json');
var middle=parse('middle.json');
var last=parse('last.json');
var first_name = first[rollD20()] + middle[rollD20()] + last[rollD20()];
var last_name = first[rollD20()] + middle[rollD20()] + last[rollD20()];

var npc_character = new Object();
npc_character["Name"] = first_name + " " + last_name;
npc_character["Characteristics"] = chars[rollD20()];
npc_character["Ideals"] = ideals[rollD20()];
npc_character["Bonds"] = bonds[rollD10()];
npc_character["Flaws"] = flaws[rollD12()];


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
