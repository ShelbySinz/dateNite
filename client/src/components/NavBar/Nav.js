import React from "react";

function Nav() {
  return (
    //dropdown structure
  
    <nav> 
      <div className="dropdown">
      
        <a className="dropdown-trigger btn waves-effect waves-light hoverable" href="#!" data-target="dropdown1">
         DateNite <i className="fas fa-angle-double-down"></i>
          <ul id="dropdown1" className="dropdown-content">
            <li><a className="dropdown-item" href="/">Login</a></li>
            <li><a className="dropdown-item" href="/home">Home</a></li>
            <li><a className="dropdown-item" href="/dates/about">About</a></li>
            <li><a className="dropdown-item" href="/dates/atHome">At Home</a></li>
            <li><a className="dropdown-item" href="/dates/outdoors">Outdoors</a></li>
            <li><a className="dropdown-item" href="/dates/restaurants">Resaurants and Bars</a></li>
            <li><a className="dropdown-item" href="/dates/movies">Movies and TV</a></li>
            <li><a className="dropdown-item" href="/dates/saved">Saved</a></li>
          </ul>
        </a>
      </div>
    </nav>
    
  );
}

export default Nav;
