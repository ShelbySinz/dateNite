const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("findAll", req.body)
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
    db.Dates
    .create(req.body)
    .then(dbModel => {console.log(dbModel); res.json(dbModel)})
    .catch(err => res.status(422).json(err))
  }
};
