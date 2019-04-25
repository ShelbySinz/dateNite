
import React, { Component } from "react";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import views
import Home from "./pages/Home/home";
import HomeDates from "./pages/atHome/homeDate";
import MovieDates from "./pages/Movies/movieDate";
import RestaurantDates from "./pages/Restaurant/restaurantDate";
import Saved from "./pages/Saved/saved.js";
import NoMatch from "./pages/NoMatch";

//import componenets
import Nav from "./components/NavBar/Nav";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  
  setAuthToken(token);
  
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
 
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dates/atHome" component={HomeDates} /> 
            <Route exact path="/dates/movies" component={MovieDates}/>
            <Route exact path="/dates/restaurants" component={RestaurantDates}/>
            <Route exact path="/dates/saved" component={Saved} /> 
            <Route component={NoMatch} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );

  }
}

export default App;
