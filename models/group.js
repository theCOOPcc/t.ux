const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    dateStarted: Date,
    endingDate: Date,
    students: [{type: Schema.Types.ObjectId, ref: 'Student'}],
    instructor: {type: Schema.Types.ObjectId, ref: 'Admin'}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Group', groupSchema);