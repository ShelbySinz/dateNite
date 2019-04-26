const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {type: String, required: true },
  savedDates: [{ type: Schema.Types.ObjectId, ref: 'Dates'  }],
  title: { type: String},
  type:   {type: String},
  description: {type: String}
 
});

const User = mongoose.model("User", userSchema);

module.exports = User;