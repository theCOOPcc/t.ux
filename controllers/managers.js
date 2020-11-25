const Manager = require("../models/manager");

module.exports = {
  index,
};

function index(req,res) {
  // TODO: Return a list of all managers
  Manager.find({}).then((managers) => res.json(managers))
}

function update(req, res) {
  // TODO: update manager data based off of form data.
  console.log('hit update manager route')
  Manager.find(req.params._id)
  .then((manager) => {
    // update manager with req.body
    console.log('manager object returned from update route',manager)
  })
}