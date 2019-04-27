
import React, { Component } from "react";
// import logo from "./logo.svg";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import HomeDates from "./pages/atHome/homeDate";
import MovieDates from "./pages/Movies/movieDate";
import RestaurantDates from "./pages/Restaurant/restaurantDate";
import OutdoorDates from "./pages/Outdoor/outdoorDate";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar/Nav";
// import Low from "./pages/low-budget/lowBudget"

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dates/atHome" component={HomeDates} /> 
          <Route exact path="/dates/movies" component={MovieDates}/>
          <Route exact path="/dates/restaurants" component={RestaurantDates}/>
          <Route exact path="/dates/outdoors" component={OutdoorDates}/>
          <Route exact path="/dates/saved" component={Saved} /> 
          {/* <Route exact path ="/dates/" component= {Low}/> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );

  }
}

export default App;
