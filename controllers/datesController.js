const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findByUsername: function(req, res) {
    console.log("USER", req.user.username) 
    db.User

    .findOne({User: req.user.username})
    
    .then(dbUser => {console.log(dbUser) ,res.json(dbUser)})
    .catch(err => console.log(err))
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
    console.log("inside controller create", req.body)
    db.User.findOne({user: req.user.username}).then(dbUser => console.log(dbUser),
    db.Dates
    .create(req.body, {user: dbUser._id })
    .then(dbModel => {console.log(dbModel); res.json(dbModel)}))
    .catch(err => res.status(422).json(err))
  }
};
