const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  label: String,
  isCorrect: Boolean,
  feedback: String,
});

const questionSchema = new Schema({
  problemStatement: { type: String, required: true },
  suggestion: String,
  answers: [answerSchema],
  media: String,
  type: String,
  timeLimit: {type: Number,  default: 0} 
});

const displaySchema = new Schema({
  media: String,
  copy: String
})

const moduleSchema = new Schema({
  moduleType: String, // Default to display (display vs, question)
  contents: [questionSchema, displaySchema]
})

const activitySchema = new Schema(
  {
    name: { type: String, required: true },
    topic: String, 
    media: String, 
    modules: [moduleSchema],
    isDraft: Boolean,
    archived: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);
