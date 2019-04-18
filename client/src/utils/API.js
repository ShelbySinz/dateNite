
import axios from "axios";
const foodToForkApi = `${process.env.REACT_APP_API_Key}`;

export default {
  // Gets all books
  saveDates: function() {
    return axios.post("/api/dates");
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
     return axios.get("https://www.food2fork.com/api/search?key="+foodToForkApi+"&q="+query)
  }
};
