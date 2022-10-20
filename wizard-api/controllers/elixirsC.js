const Elixirs = require("../models/Elixirs");

const index = (req, res) => {
  try {
    const elixirs = Elixirs.showAll();
    res.send(elixirs);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong on our side" });
  }
};

const showIndex = (req, res) => {
  const idx = parseInt(req.params.id);
  try {
    const elixir = Elixirs.showIndex(idx);
    res.send(elixir);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong on our side" });
  }
};

module.exports = {
  index,
  showIndex,
};
