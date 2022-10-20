const express = require("express");
const router = express.Router();
const feedback = require("../controllers/feedbackC");

router.post("/", feedback.giveFeedback);

router.get("/", feedback.showAll);

router.delete("/:id", feedback.remove);

module.exports = router;
