const houseData = require("../wizardData/houses");

class House {
  constructor(house) {
    this.id = house.id;
    this.name = house.name;
    this.houseColours = house.houseColours;
    this.founder = house.founder;
    this.animal = house.animal;
    this.element = house.element;
    this.ghost = house.ghost;
    this.commonRoom = house.commonRoom;
    this.heads = house.heads;
    this.traits = house.traits;
  }

  static showAll() {
    return houseData.map((house) => new House(house));
  }

  static show(idx) {
    if (idx < houseData.length && idx >= 0) {
      return new House(houseData[idx]);
    } else {
      throw "House not found";
    }
  }
}

module.exports = House;
