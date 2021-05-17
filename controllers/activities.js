const Activity = require('../models/activity');

module.exports = {
  create,
  index,
  delete: deleteOne,
  update,
  show,
};

// tested and this works cory
function index(req, res) {
  Activity.find({})
    .then((activities) => {
      res.json(activities);
    })
    .catch((err) => {
      res.json(err);
    });
}

// Confirmed: create controller is working
function create(req, res) {
  Activity.create(req.body)
    .then((activity) => {
      // console.log('activity', activity)
      res.status(200).json(activity);
    })
    .catch((err) => {
      res.json(err);
    });
}

// tested and this works cory
function deleteOne(req, res) {
  Activity.findByIdAndDelete(req.params.id)
    .then((activity) => {
      res.json(activity);
    })
    .catch((err) => {
      res.json(err);
    });
}

// tested and this works cory
function update(req, res) {
  Activity.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((activity) => {
      res.json(activity);
    })
    .catch((err) => {
      res.json(err);
    });
}

// tested and this works cory
function show(req, res) {
  Activity.findById(req.params.id)
    .then((activity) => {
      res.json(activity);
    })
    .catch((err) => res.json(err));
}