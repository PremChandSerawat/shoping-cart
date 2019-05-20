import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton=(props)=>(
  <button className="toggle-button" onClick={props.click}>
<img src="https://img.icons8.com/material/24/000000/squared-menu.png"/>
  </button>
);
export default drawerToggleButton;
