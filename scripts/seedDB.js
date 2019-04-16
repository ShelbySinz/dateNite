const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dateNite"
);

const dateSeed = [
  {
    title: "Movie theater",
    type:  "Movies&Tv" ,
    description: "Pick a movie neither one of you have seen",
    whatYouNeed: "Snacks, movie-tickets"
  },
  {
    title: "Watch a movie or show from your birth year",
    type: "Movies&Tv",
    description:
      "Use OMBD to view movies released on your birth year.",
    whatYouNeed: "Netflix"
   
  },
  {
    title: "Take a hike",
    type: "Outdoor",
    description:
      "Get out a map and find a trail",
    whatYouNeed: "tennis shoes, sunscreen, map"
   
  },
  {
    title: "Picnic in the park",
    type: "Outdoor",
    description:
      "Pack a lunch, a blanket, and suncreen, find a park and enjoy an old school picnic",
    whatYouNeed: "blanket, picnic basket, sunscreen, lunch"
  },
  {
    title: "Fondue Night",
    type: "At-home",
    description:
      "Search our site for fondue recipes. Have a fun night dipping foods in cheese!",
    whatYouNeed: "finger foods, fondue recipe"
  },
  {
    title: "Theme night",
    type: "At-home",
    description:
      "Dress up like your favorite decade and have a themed dinner!",
    whatYouNeed: "dinner, fun outfits"
    
  },
  {
    title: "Bubble bath",
    type: "Low-Budget",
    description:
      "Get some candles and bubbles and enjoy and relaxing bath together",
    whatYouNeed: "candles, bubbles, bath"
    
  },
  {
    title: "Can I please have s'more",
    type: "Low-Budget",
    description:
      "S'mores are a timeless classic that takes you back",
    whatYouNeed: "Marshmellows, Chocolate, Graham Crackers, fire "
  }
 
];

db.Dates
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
