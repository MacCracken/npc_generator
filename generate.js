// Returns a random integer between min (included) and max (included)
import { rollD20, rollD10, rollD12 } from './dice.js';
import { readFileSync } from 'fs';

function parse(filename) {
  return JSON.parse(readFileSync(filename))
}

function createCharacter() {
  var first = parse('first.json');
  var middle = parse('middle.json');
  var last = parse('last.json');
  var first_name = first[rollD20()] + middle[rollD20()] + last[rollD20()];
  var last_name = first[rollD20()] + middle[rollD20()] + last[rollD20()];

  // Capitalizes First Character
  first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1); 
  last_name = last_name.charAt(0).toUpperCase() + last_name.slice(1); 

  // Characteristics
  var chars = parse('characteristics.json');
  var ideals = parse('ideals.json');
  // Establishing Incase Roll is 10 
  // ReRoll will be necessary untill non 10 is hit
  var bonds = parse('bonds.json');
  var flaws = parse('flaws.json');
  var bonded = bonds[rollD10()];
  var bond_reroll = bonds[10]
  while (bonded == bond_reroll == true){
    bonded=bonds[rollD10()]
  } 

  var character = new Object();
  character['Name'] = first_name + ' ' + last_name;
  character['Characteristics'] = chars[rollD20()];
  character['Ideals'] = ideals[rollD20()];
  character['Bonds'] = bonded;
  character['Flaws'] = flaws[rollD12()];
  return character
}

function logLine(){
  console.log("--------------------------")
}

function logHeader(){
  logLine();
  console.log("D&D 5E NPC Generator v 1.1");
  logLine();
}

function clogged(character) {
  console.log("Name: " + character["Name"]);
  console.log("Characteristics: " + character["Characteristics"]);
  console.log("Ideals: " + character["Ideals"]);
  console.log("Bonds: " + character["Bonds"]);
  console.log("Flaws: " + character["Flaws"]);
  logLine();
}

logHeader();
var args = process.argv;
var switcher = args[2] || 1;
var x = 0;
while (x < switcher) {
  clogged(createCharacter());
  x += 1;
}
