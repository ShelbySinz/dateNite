
import axios from "axios";
require("dotenv").config();


export default {
  // Gets all books
  saveDates: function(dateData) {
    return axios.post("/api/dates", dateData);
  },
  // Gets the book with the given id
  getSavedDates: function() {
    return axios.get("/api/dates/"); 
  },
  // Deletes the book with the given id
  deleteDate: function(id) {
    return axios.delete("/api/dates/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/User", userData);
  },

  getRecipe : function(query){
    const RECIPE_API = "11fc0e368f94746dc17947610fa5ac19";
     return axios.get("https://www.food2fork.com/api/search?key="+RECIPE_API+"&q="+query)
  },

  getMovie : function(query){
    const MOVIE_API = "apikey=trilogy";
     return axios.get("https://www.omdbapi.com/?"+MOVIE_API+"&t="+query)
  }
};
