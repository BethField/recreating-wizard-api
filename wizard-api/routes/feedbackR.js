const express = require("express");
const router = express.Router();
const feedback = require("../controllers/feedbackC");

router.post("/", feedback.giveFeedback);

router.get("/", feedback.showAll);

module.exports = router;
