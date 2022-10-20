const elixirs = require("../wizardData/elixirs");

class Elixir {
  constructor(elixir) {
    this.id = elixir.id;
    this.name = elixir.name;
    this.sideEffects = elixir.sideEffects;
    this.characteristics = elixir.characteristics;
    this.time = elixir.time;
    this.difficulty = elixir.difficulty;
    this.ingredients = elixir.ingredients;
    this.inventors = elixir.inventors;
    this.manufacturer = elixir.manufacturer;
  }

  static showAll() {
    return elixirs.map((e) => new Elixir(e));
  }

  static showIndex(idx) {
    if (idx < elixirs.length && idx >= 0) {
      return new Elixir(elixirs[idx]);
    } else {
      throw "Quote not found.";
    }
  }
}

module.exports = Elixir;
