const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  label: String,
  isCorrect: Boolean,
  // wrongAnswerTip
  // correctAnswerTip
  // feedback: { isCorrect: false, feedbackText: String} // TODO: Waiting on confirmation before changing data.
});

const questionSchema = new Schema({
  problemStatement: { type: String, required: true },
  suggestion: String,
  answers: [answerSchema],
  // type: // TODO: Question type is a string that denotes what template to use to dictate behavior of responses/answers. ie Multiple Choice, Multiple Answer, Boolean, Flex.
});

const activitySchema = new Schema(
  {
    name: { type: String, required: true },
    duration: Number, // TODO: Should be renamed to Time Limit
    numberOfQuestions: Number,
    topics: String, // TODO: Rename to topic not topics, make sure you rename in other components/controllers as well.
    type: String, // TODO: No longer has a type, the type belongs to a question. 
    media: String, // A url string pointing to our media bucket, will be a photo or video to be displayed.
    questions: [questionSchema], // TODO: Attach type property to question, so that multiple questions types can be part of one activity.
    // recap: // TODO: Finalize what a recap is, and add this property. Some sort of template.
    isDraft: Boolean,
    archived: Boolean,
    // createdBy: reference to Manager/Admin id who created activity.
  },
  { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);
