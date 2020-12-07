const User = require("../models/user");

module.exports = {
  index,
  showProfile,
  update,
  deleteProfile
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function showProfile(req, res) {
  User.find(req.user._id)
  .then(res => res.json())
}

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true })
  .then(res => res.json())
}

function deleteProfile(req, res) {
  User.findByIdAndDelete(req.user._id)
  .then(res => res.json())
}