const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Data model for what a group of students looks like.

const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    dateStarted: Date,
    endingDate: Date,
    users: [{ type: String }],
    invited: [],
    // createdBy: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Group', groupSchema);
