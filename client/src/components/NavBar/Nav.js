import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="dropdown">
          <a className="btn btn-info" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false"
            style={{
            marginLeft: "1rem",
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1px"
          }}
          >
            DateNite <i className="fas fa-angle-double-down"></i>
          </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="/">Home</a>
          <a className="dropdown-item" href="/dates/atHome">At Home</a>
        
          <a className="dropdown-item" href="/dates/outdoors">Outdoors</a>
          <a className="dropdown-item" href="/dates/restaurants">Resaurants and Bars</a>
          <a className="dropdown-item" href="/dates/movies">Movies and TV</a>
          <a className="dropdown-item" href="/dates/saved">Saved</a>
        </div>
      </div>
      
      {/* add register user and login buttons */}
      <a
        style={{
          marginLeft: "1rem",
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1px"
        }}
        className="btn btn-info" href="#" role="button"      >
        Register
      </a>
      <a
        style={{
          marginLeft: "1rem",
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1px"
        }}
        className="btn btn-info" href="#" role="button" 
        >
          Log In
        </a>   
    </nav>
    
  );
}

export default Nav;
