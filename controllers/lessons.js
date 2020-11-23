const Lesson = require('../models/lesson')

module.exports = {
    create,
    index,
    delete: deleteOne,
    update,
    show
}

function index(req, res) {
    Lesson.find({})
    //.populate('createdBy')
    .then(lessons => { res.json(lessons) })
    .catch(err => { res.json(err) })
}

function create(req, res) {
    req.body.createdBy === req.user._id
    Lesson.create(req.body)
        .then(lesson => { res.json(lesson) })
        .catch(err => { res.json(err) })
}

function deleteOne(req, res) {
    Lesson.findByIdAndDelete(req.params._id)
        .then(lesson => { res.json(lesson) })
        .catch(err => { res.json(err) })
}

function update(req, res) {
    Lesson.findByIdAndUpdate(req.user._id, req.body, { new: true })
        .then(lesson => { res.json(lesson) })
        .catch(err => { res.json(err) })
}

function show(req, res) {
    Lesson.findById(req.user._id)
        .then(lesson => { res.json(lesson) })
        .catch(err => res.json(err) )
}
