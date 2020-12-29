const User = require("../models/user");

module.exports = {
  index,
  showProfile,
  update,
  deleteProfile
};

function index(req, res) {
  console.log('get all users')
  User.find({}).then((users) => res.json(users));
}

function showProfile(req, res) {
  User.find(req.user.id)
  .then((user) => res.json(user))
}

function update(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((user) => res.json(user))
}

function deleteProfile(req, res) {
  User.findByIdAndDelete(req.user._id)
  .then((user) => res.json(user))
}