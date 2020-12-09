const User = require("../models/user");

module.exports = {
    indexManagers,
    showManager,
    updateManager,
    deleteManager
  };
  
  function indexManagers(req, res) {
    console.log("req.user", req.user);
    User.find({}).then((users) => res.json(users));
  }
  
  function showManager(req, res) {
    User.find(req.user._id)
    .then(res => res.json())
  }
  
  function updateManager(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(res => res)
      // res.json()
  }
  
  function deleteManager(req, res) {
    User.findByIdAndDelete(req.user._id)
    .then(res => res.json())
  }