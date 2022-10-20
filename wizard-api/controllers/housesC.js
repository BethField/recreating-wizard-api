const Houses = require("../models/Houses");

const index = (req, res) => {
  try {
    const houses = Houses.showAll();
    res.send(houses);
  } catch (err) {
    res.status(500).send({ error: "Server error" });
  }
};

const showIndex = (req, res) => {
  const idx = parseInt(req.params.id);
  try {
    const house = Houses.show(idx);
    res.send(house);
  } catch {
    res.status(404).send({ error: "Quote not found" });
  }
};

module.exports = { index, showIndex };
