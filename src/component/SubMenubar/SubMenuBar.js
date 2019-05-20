import React from 'react';
import './SideDrawer.css'
export default SideDrawer extends React.Component{
     state={
       subMenuName:''
     }
    constructor(props){
      super(props);
    }
  render(){
    retrun(
  let drawerClasses='side-drawer';
  if(this.props.show){
    drawerClasses='side-drawer open';
}
  return(
  <nav className={drawerClasses}>
  <div className="subMenuBarHeader">
  <i className="fas fa-arrow-alt-circle-left">{this.state.menuName}</i>
  </div>
  <ul>
   <li><a href="">SubMenu 1</a></li>
   <li><a href="">SubMenu 2</a></li>
   <li><a href="">SubMenu 3</a></li>
   <li><a href="">SubMenu 4</a></li>
   <li><a href="">SubMenu 5</a></li>
   <li><a href="">SubMenu 6</a></li>
   <li><a href="#" onClick={this.props.loginFormOpen}>login</a></li>
  </ul>
  </nav>
);}
};
export default SideDrawer;
