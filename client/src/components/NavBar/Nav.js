import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand" href="/">
          DateNite
        </a>
        <a className="navbar-brand" href="/dates/atHome">
          At Home
        </a>
        <a className="navbar-brand" href="/dates/lowBudget">
          Low Budget
        </a>
        <a className="navbar-brand" href="/dates/outdoors">
          Outdoors
        </a>
        <a className="navbar-brand" href="/dates/restaurants">
          Restaurants and Bars
        </a>
        <a className="navbar-brand" href="/dates/movies">
          Movies and TV
        </a>
        <a className= "navbar-brand" href="/dates/saved">Saved</a>
    </nav>
    
  );
}

export default Nav;
