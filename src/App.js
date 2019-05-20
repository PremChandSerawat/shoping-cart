import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MdFilterList} from "react-icons/md";
import Header from './component/Header/Header.js';
import Header2 from './component/Header2/Header2.js';
import Footer from './component/Footer/Footer.js';
import SideDrawer from './component/SideDrawer/SideDrawer.js';
import BackDrop from './component/BackDrop/BackDrop.js';
import MenuBar from './component/MenuBar/MenuBar.js';
import LoginForm from './component/LoginForm2/LoginForm.js';
import Card from "./component/Card2/Card.js";
import Filter from "./component/Filter/Filter.js";
import PrimarySearchAppBar from "./component/MobileAppBar/MobileAppBar.js";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword.js";
import Card1 from "./component/Card/Card.js";
import UserDetails from "./component/UserDetails/UserDetails.js";
import { forwardRef, useRef, useImperativeHandle } from 'react';
import MUICard from "./component/MUICard/MUICard.js";
import Grid from '@material-ui/core/Grid';
import ProfileEditForm from "./component/UserDetails/ProfileEditForm.js";
import ItemWindowWithFilter from "./component/Filter/Filter.js";
import FilterSheet from "./component/Filter2/Filter2.js";
import CarouselRender from "./component/Carousel/Carousel.js";
import InputRange from 'react-input-range';
import ItemDetails from './component/ItemDetails/ItemDetails.js';
import ProductBar from './component/ProductBar/ProductBar.js';
import SlideBar from './component/SlideBar/SlideBar.js';
//import ItemCompare from './component/ItemCompare/ItemCompare.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
constructor(props){
  super(props);
  this.child = React.createRef();
}
closeSubMenu=()=>{
  console.log("close sun kmehf");
  this.child.current.closeSubMenu();
}
  render(){
          return(

          /*<div>
           <Route path="/" component={PrimarySearchAppBar} />
            <div className="filterDivHide">
           <Route path="/" component={FilterSheet} />
           </div>
          */
          <Router>

          <Grid container>
          <Grid item xs={12}>
          <PrimarySearchAppBar />
          <Route path="/" component={SlideBar} />
           <ProductBar/>
          </Grid>

              <Grid item xs={12} sm={5}>
              <Route path="/" component={CarouselRender}/>
            </Grid>
            <Grid item xs={12} sm={7}>
            <Route path="/" component={ItemDetails}/>


          </Grid>
           <Switch>


           <Route path="/profile" component={UserDetails} />
           </Switch>
          </Grid>

          </Router>

    );
  }
}

export default App;
