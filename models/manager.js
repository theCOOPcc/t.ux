const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const managerSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: String,
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

managerSchema.set('toJSON', {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

managerSchema.pre('save', function (next) {
  // this will be set to the current document
  const manager = this;
  if (!manager.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(manager.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the manager provided password with the hash
    manager.password = hash;
    next();
  });
});

managerSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('manager', managerSchema);
