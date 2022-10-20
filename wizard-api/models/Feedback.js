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

  static showAll() {
    return feedbackData.map((f, i) => new Feedback(f, i));
  }
}

module.exports = Feedback;
