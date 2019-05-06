const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findByUsername: function(req, res) {

    db.User.findOne({username: req.user.username}).then(dbUser => {console.log(dbUser),
      db.Dates.find({user: dbUser._id}).populate("user")
      .then(dbModel => {console.log(dbModel); res.json(dbModel)})})
   
  },

  findUser: function(req, res){
    db.User.findOne({username: req.user.username}).then(dbUsers => res.json(dbUsers))
    
    
  },
  deleteUser: function(req, res){
    db.User.findOneAndRemove({username: req.user.username}).then(dbUsers => dbUsers.remove()).then(dbModel => res.json(dbModel))
    
    
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
   console.log("USERNAME " , req.user.username);
    db.User.findOne({username: req.user.username}).then(dbUser => {console.log(dbUser),
    db.Dates
    .create({type: req.body.type, title: req.body.title, description: req.body.description, whatYouNeed: req.body.whatYouNeed, user: dbUser._id })

    .then(dbModel => {console.log(dbModel); res.json(dbModel)})})
    .catch(err => res.status(422).json(err))
    }

};
