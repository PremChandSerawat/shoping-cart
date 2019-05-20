import React from 'react';
import './Header.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js';
import SearchBox from '../SearchBox/SearchBox.js';
export default class Header2 extends React.Component
{    constructor(props)
     {
       super(props);
     }
render(){
  return(
  <div>
      <header className="toolbar">
      <nav className="toolbar_navigation">
      <div className="toolbar-toggle-button">
      <DrawerToggleButton click={this.props.drawerToggleClickHandler}/>
      </div>
      <div className="toolbar_logo"><a href="#">Logo</a></div>
      <div className="toolbar_navigation-items">
      <ul>
     <li><a>home</a></li>
     <li><a>contect</a></li>
     <li><a>Demo</a></li>

      </ul>
      </div>

      <input type="text" className="form-control" id="searchInput" />
      <button className="btn btn-primary" id="searchButton">
          <i className="fas fa-search"></i>
        </button>
      <div className="toolbar_logo2"><a href="#">Logo</a></div>
      <div className="shopingCartDiv">
      <a>
      <i className="fas fa-shopping-cart shopingCart">Cart</i>
      </a>
      </div>
      </nav>
      </header>
<div className="outerSearchBox">
<input type="text" className="form-control" id="outerSearchInput" />
<a href="#" className="btn btn-primary" id="outerSearchButton">Search</a>
</div>
      </div>
    );
    }

}
