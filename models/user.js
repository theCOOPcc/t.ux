const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const assignmentSchema = new Schema({
  activityId: { type: Schema.Types.ObjectId, ref: 'activity' },
  dateStarted: Date,
  score: Number,
  isComplete: Boolean,
  // recap: ,
  // flag: ,
});

const userSchema = new Schema(
  {
    // user model data:
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    assignments: [assignmentSchema],
    // user data: 0
    userPermissions: Number
    // hold different information that the user could have

    // manager data: 100

    // admin data: 200
  },
  {
    timestamps: true,
  }
);

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

userSchema.pre('save', function (next) {
  // this will be set to the current document
  const user = this;
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);
