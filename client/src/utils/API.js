
import axios from "axios";
require("dotenv").config();


export default {
  // Gets all saved dates
  saveDates: function(dateData) {
    return axios.post("/api/dates", dateData, {"Authorization": localStorage.getItem('jwtToken') });
    
  },
  // Gets a saved date with the given id
  getSavedDates: function() {
    return axios.get("/api/dates/"); 
  },
  // Deletes the saved date with the given id
  deleteDate: function(id) {
    return axios.delete("/api/dates/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/User", userData);
  },

  //retrieves a recipe from our external api
  getRecipe : function(query){
    const RECIPE_API = "11fc0e368f94746dc17947610fa5ac19";
     return axios.get("https://www.food2fork.com/api/search?key="+RECIPE_API+"&q="+query);
  },

  //retrieves a movie from our external api
  getMovie : function(query){
    const MOVIE_API = "&apikey=trilogy";
     return axios.get("https://www.omdbapi.com/?t="+query+MOVIE_API);
  },

  //retrieves a restaurant location from our external api
  getRestaurant : function(type) {
     const YOUR_API_KEY = "AIzaSyDFpd-2EoMstvbarr8ywlER8dEv2nzfQhY"; //Google API
    return axios.get("https://cors-anywhere.herokuapp.com/"+
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+type+
        "+restaurants+in+Denver&key="+YOUR_API_KEY);
  },

  getHike : function(lat, lon) {
    const HIKE_API_KEY = "200457234-aadf9493c102fc6c8f6fe159530e1e46";
    
    return axios.get('http://www.hikingproject.com/data/get-trails?'+lat+"&"+lon+"&"+HIKE_API_KEY);
  }

};
