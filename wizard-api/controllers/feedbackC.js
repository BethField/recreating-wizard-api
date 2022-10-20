const Feedback = require("../models/Feedback");

const giveFeedback = (req, res) => {
  const feedbackData = req.body;
  try {
    Feedback.giveFeedback(feedbackData);
    res.send({ message: "Feedback has been added" });
  } catch {
    res.status(500).send("Feedback could not be added");
  }
};

module.exports = { giveFeedback };
