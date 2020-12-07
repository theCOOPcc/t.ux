const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  label: String,
  isCorrect: Boolean,
});

const questionSchema = new Schema({
  problemStatement: { type: String, required: true },
  suggestion: String,
  answers: [answerSchema],
});

const activitySchema = new Schema(
  {
    name: { type: String, required: true },
    duration: Number,
    numberOfQuestions: Number,
    topics: String,
    type: String,
    media: String,
    questions: [questionSchema],
    // recap:
    isDraft: Boolean,
    archived: Boolean,
    createdBy: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);
