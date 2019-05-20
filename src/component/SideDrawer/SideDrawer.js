import React from 'react';
import './SideDrawer.css'
const SideDrawer=props=>{
  let drawerClasses='side-drawer';
  if(props.show){
    drawerClasses='side-drawer open';
}
  return(
  <nav className={drawerClasses}>
  <ul>
   <li><a href="" onClick={props.subMenuOpen}>Menu 1</a></li>
   <li><a href="">Menu 2</a></li>
   <li><a href="">Menu 3</a></li>
   <li><a href="">Menu 4</a></li>
   <li><a href="">Menu 5</a></li>
   <li><a href="">Menu 6</a></li>
   <li><a href="#" onClick={props.loginFormOpen}>login</a></li>
  </ul>
  </nav>
);
};
export default SideDrawer;
