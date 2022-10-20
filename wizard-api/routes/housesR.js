const express = require("express");
const router = express.Router();
const houses = require("../controllers/housesC");

router.get("/", houses.index);

router.get("/:id", houses.showIndex);

module.exports = router;
