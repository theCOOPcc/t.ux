const Group = require('../models/group')

module.exports = {
    create,
    delete: deleteOne,
    update,
    show,
    index
}

function create(req, res) {
    req.body.createdBy = req.user._id
    Group.create(req.body)
        .then(group => { res.json(group) })
        .catch(err => { res. json(err) })
}

function deleteOne(req, res) {
    Group.findByIdAndDelete(req.params.id)
        .then(group => { res.json(group) })
        .catch(err => { res.json(err) })
}

function update(req, res) {
    Group.findByIdAndUpdate(req.params, req.body, { new: true })
    // .populate('createdBy')
        .then(group => { res.json(group) })
        .catch(err => { res.json(err) })
}

function show(req, res) {
    Group.findById(req.params)
        .then(group => { res.json(group) })
        .catch(err => { res.json(err) })
}

function index(req, res) {
    Group.findById({})
        .then(groups => { res.json(groups) })
        .catch(err => { res.json(err) })
}