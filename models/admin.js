const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    nameFirst: { type: String, required: true },
    nameLast: { type: String, required: true },
    email: { type: String, required: true },
    // permissions:
    currentStudents: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    previousStudents: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    // invitedStudents: []
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Admin', adminSchema);
