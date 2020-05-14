// Random Int Generator and Dice Types
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rollD20() {
  return getRandomInt(1, 20);
}
export function rollD12() {
  return getRandomInt(1, 12);
}
export function rollD10() {
  return getRandomInt(1, 10);
}
export function rollD8() {
  return getRandomInt(1, 8);
}
export function rollD6() {
  return getRandomInt(1, 6);
}
export function rollD4() {
  return getRandomInt(1, 4);
}
