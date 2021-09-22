// import {sessionInfoSchema} from "./sessionInfo"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const assignmentSchema = new Schema({
  activityId: { type: Schema.Types.ObjectId, ref: 'activity' },
  dateStarted: Date,
  score: Number,
  isComplete: Boolean,
  
  lastModuleVisited: Number,
  lastLoggedin: Date,
});

module.exports = mongoose.model('Assignment', assignmentSchema);

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    sessionInfo:[assignmentSchema],
    userPermissions: Number,
    googleId: String,
    avatar: String,
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
