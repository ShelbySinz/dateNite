import React, {Component} from "react";

class Nav extends Component {
  
  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }
 render() {
   return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="dropdown">
         <a className="btn btn-light"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
         DateNite <i className="fas fa-angle-double-down"></i>
         </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="/">Login</a>
        <a className="dropdown-item" href="/home">Home</a>
        <a className="dropdown-item" href="/dates/about">About</a>
        <a className="dropdown-item" href="/dates/atHome">At Home</a>
        <a className="dropdown-item" href="/dates/outdoors">Outdoors</a>
        <a className="dropdown-item" href="/dates/restaurants">Resaurants and Bars</a>
        <a className="dropdown-item" href="/dates/movies">Movies and TV</a>
        <a className="dropdown-item" href="/dates/saved">Profile Page</a>
        <a className="dropdown-item" onClick={localStorage.getItem('jwtToken') && this.logout} href= "/">Logout </a>
      </div>
    </div>

    </nav>
    
  );
}
}
export default Nav;
