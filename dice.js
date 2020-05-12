// Random Int Generator and Dice Types
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  rollD20: function() {
    return getRandomInt(1,20);
  },
  rollD12: function() {
    return getRandomInt(1,12);
  },
  rollD10: function() {
    return getRandomInt(1,10);
  },
  rollD8: function() {
    return getRandomInt(1,8);
  },
  rollD6: function() {
    return getRandomInt(1,6);
  },
  rollD4: function() {
    return getRandomInt(1,4);
  }
}