const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
  title:{ type: String, required: true },
  type:{type: String, required: true },
  description: {type: String},
  whatYouNeed: {type: String},
  user: {type: Schema.Types.ObjectId, 
            ref: "User"}
  
 
});

const Dates = mongoose.model("Dates", dateSchema);

module.exports = Dates;
