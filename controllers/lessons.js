const Lesson = require('../models/lesson');

module.exports = {
  create,
  index,
  delete: deleteOne,
  update,
  show,
};

// tested and this works cory
function index(req, res) {
  Lesson.find({})
    .then((lessons) => {
      res.json(lessons);
    })
    .catch((err) => {
      res.json(err);
    });
}

// Confirmed: create controller is working
function create(req, res) {
  console.log('request body', req.body)
  Lesson.create(req.body)
    .then((lesson) => {
      console.log('lesson',lesson)
      res.status(200).json(lesson);
    })
    .catch((err) => {
      res.json(err);
    });
}

// tested and this works cory
function deleteOne(req, res) {
  Lesson.findByIdAndDelete(req.params.id)
    .then((lesson) => {
      res.json(lesson);
    })
    .catch((err) => {
      res.json(err);
    });
}

// tested and this works cory
function update(req, res) {
  Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((lesson) => {
      res.json(lesson);
    })
    .catch((err) => {
      res.json(err);
    });
}

// tested and this works cory
function show(req, res) {
  Lesson.findById(req.params.id)
    .then((lesson) => {
      res.json(lesson);
    })
    .catch((err) => res.json(err));
}