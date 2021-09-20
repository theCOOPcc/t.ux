
const User = require("../models/user");

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

// Dylan
function updateSessionInfo(req, res) {
User.findOneAndUpdate(req.user.id, req.body, {new: true})
.then((sessionInfo) => {
  console.log("Session in fo being updated...")
  res.status(200).json(sessionInfo);
})
.catch((err) => {
  res.json(err);
})}

function deleteProfile(req, res) {
  User.findByIdAndDelete(req.user._id)
  .then((user) => res.json(user))
}

function currentUser(req, res){
  
  res.status(200).json(req.user)
  console.log(req.user.id)
}





module.exports = {
  index,
  showProfile,
  update,
  updateSessionInfo,
  deleteProfile,
  currentUser,
};