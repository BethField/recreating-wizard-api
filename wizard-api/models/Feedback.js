const feedbackData = require("../wizardData/feedback");

class Feedback {
  constructor(feedback, id) {
    this.id = id;
    this.feedbackType = feedback.feedbackType;
    this.feedback = feedback.feedback;
  }

  static giveFeedback(data) {
    feedbackData.push(data);
    console.log(feedbackData);
  }
}

module.exports = Feedback;
