const express = require("express");
const router = express.Router();
const elixirs = require("../controllers/elixirsC");

router.get("/", elixirs.index);

router.get("/:id", elixirs.showIndex);

module.exports = router;
