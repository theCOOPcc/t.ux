const User = require("../models/user");

module.exports = {
  index,
  showProfile,
  update,
  deleteProfile,
  currentUser
};

function index(req, res) {
  // console.log('get all users')
  User.find({}).then((users) => res.json(users));
}

function showProfile(req, res) {
  console.log('CONTROLLER', req.user)
  User.findById(req.user.id)
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

function currentUser(req, res){
  res.json(req.user)
}