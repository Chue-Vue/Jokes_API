const Joke = require('../models/jokes.models'),
    mongoose = require('mongoose');

module.exports = {
    index: (req, res) => {
        Joke.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create : (req, res) => {
        Joke.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    show : (req, res) => {
        Joke.findOne({_id:req.params.id})
            .then(data => {
                res.json({results:data})
            })
            .catch(err => res.json(err.errors))
    },
    update: (req, res) => {
        Joke.findOneAndUpdate({_id:req.params.id}, req.body, {useFindAndModify:true, runValidators:true})
            .then(data => {
                // res.redirect(`/api/widgets/${widget._id}`)
                res.json({results:data})
            })
            .catch(err => res.json(err.errors))
    },
    destroy: (req, res) => {
        Joke.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    }
}