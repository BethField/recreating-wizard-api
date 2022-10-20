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

const showAll = (req, res) => {
  try {
    const feedbacks = Feedback.showAll();
    res.send(feedbacks);
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
};

const remove = (req, res) => {
  const id = parseInt(req.params.id);
  //console.log(id);
  try {
    const feedback = Feedback.select(id);
    console.log(feedback);
    feedback.remove();
    res.send("Deleted");
  } catch (err) {
    res.status(404).send({ error: "Feedback not found" });
  }
};

module.exports = {
  giveFeedback,
  showAll,
  remove,
};
