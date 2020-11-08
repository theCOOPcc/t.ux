const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson' },
  dateStarted: Date,
  score: Number,
  isComplete: Boolean,
  // recap: ,
  // flag: ,
});

const studentSchema = new Schema(
  {
    nameFirst: { type: String, required: true },
    nameLast: { type: String, required: true },
    email: { type: String, required: true },
    assignments: [assignmentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Student', studentSchema);
