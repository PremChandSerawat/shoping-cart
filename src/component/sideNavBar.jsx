import React from 'react';
import '../css/sidenavBar.css'
export default class SideNavBar extends React.Component {
  constructor() {
    super();
    this.closeNav=this.closeNav.bind(this);
  }
closeNav(){

}
      render()
       {
         return(
    <div id="mySidenav" className="sidenav">
  //<a href="javascript:void(0)" className="closebtn" onclick={this.closeNav}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
         );
       }
}
