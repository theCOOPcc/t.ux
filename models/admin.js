const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const adminSchema = new Schema(
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

adminSchema.set('toJSON', {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

adminSchema.pre('save', function (next) {
  // this will be set to the current document
  const admin = this;
  if (!admin.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(admin.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the admin provided password with the hash
    admin.password = hash;
    next();
  });
});

adminSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('Admin', adminSchema);
