const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  activityId: { type: Schema.Types.ObjectId, ref: "activity" },
  dateStarted: Date,
  score: Number,
  isComplete: Boolean,

  lastModuleVisited: Number,
  lastLoggedin: Date,
});

module.exports = mongoose.model("Assignment", assignmentSchema);

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    sessionInfo: [assignmentSchema],
    userPermissions: Number,
    googleId: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
