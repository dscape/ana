
//person.new
module.exports = function createPerson() {

  var stamina = 100;

  function sleep() {
    if(stamina < 75) {
      // newStamina = oldStamina + 25; 
      // stamina = stamina + 25;
      stamina += 25;
    } else {
      stamina = 100;
    }
  }

  function run() {
    if(stamina < 25) {
      console.log("Cant run too tired");
    } else {
      console.log("Running");
      stamina -= 50;
    }
  }

  return {
    sleep: sleep,
    run: run
  };

};

// var person = require('person')
// var newPerson = person.new();