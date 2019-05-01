const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findByUsername: function(req, res) {
    db.User

    .findOne({username: req.user.username}).then(dbUser => 
      res.json(dbUser))
    //   db.Dates
    //   .find({user:dbUser._id})
    //   .then(dbDates => {console.log(dbUser._id), res.json(dbDates)}))
    // .catch(err => console.log(err))
  },
  findAll: function(req, res) {
    console.log("findAll", req.body)
    console.log("USER", req.user.username) 
    db.Dates
      .find(req.query)
      .then(dbModel => {console.log(dbModel);res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Dates
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res){
    // console.log("inside controller create", req.body)
    db.User.findOne({username: req.user.username}).then(dbUser => 
    db.Dates
    .create({type: req.body.type, title: req.body.title, description: req.body.description, whatYouNeed: req.body.whatYouNeed, user: dbUser._id })
    .then(dbModel => {console.log(dbModel); res.json(dbModel)}))
    .catch(err => res.status(422).json(err))
  }
};
