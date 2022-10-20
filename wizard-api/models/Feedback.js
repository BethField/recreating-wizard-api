const feedbackData = require("../wizardData/feedback");

class Feedback {
  constructor(feedback, id) {
    this.id = id;
    this.feedbackType = feedback.feedbackType;
    this.feedback = feedback.feedback;
  }

  static giveFeedback(data) {
    feedbackData.push(data);
    //console.log(feedbackData);
  }

  static showAll() {
    return feedbackData.map((f, i) => new Feedback(f, i));
  }

  static select(idx) {
    if (idx < feedbackData.length && idx >= 0) {
      return new Feedback(feedbackData[idx], idx);
    } else {
      throw "Feedback not found";
    }
  }

  remove() {
    console.log(feedbackData[this.id]);
    feedbackData[this.id] = {};
  }
}

module.exports = Feedback;
