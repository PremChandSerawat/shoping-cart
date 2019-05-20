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
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'






class App extends Component {

  constructor(props){
    super(props);
    this.openForgotPassword=this.openForgotPassword.bind(this);
    this.closeForgotPassword=this.closeForgotPassword.bind(this);
   this.loginFormOpen=this.loginFormOpen.bind(this);
   this.mouseout=this.mouseout.bind(this);
   this.mouseover=this.mouseover.bind(this);
   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
   this.state={
     loginModel:false,
     openForgotPassword:false,
     width:0,
     height:0,
     mouseOver:false,
     filterShow:true
   }
  }

  componentDidMount() {

    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
    if(this.state.width<786)
        this.setState({filterShowm :false})
    console.log("window height",this.state.width);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    console.log("window height",this.state.width);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log("window height",this.state.width);
  }
mouseover=()=>{
  console.log("mouse over here");
  this.setState({mouseOver:true})
}
mouseout=()=>{
  console.log("mouse over",this.state.mouseOver);
  this.setState({mouseOver:false});
}











  loginFormOpen=()=>{
    this.setState({
      loginModel:true
    });
  }
  openForgotPassword=()=>{
    this.setState({
      loginModel:false,
      openForgotPassword:true
    })
  }
  closeForgotPassword=()=>{
this.setState({
  openForgotPassword:false
})

  }
  loginFormClose=()=>{
    this.setState({
      loginModel:false
    });
  }
  render(){
    let header;
    let loginForm;
    let filter;
    let resetPassword;
    let login=false;
    if(login)
      {
        header=<Header2 />
      }else{
        // header=<Header loginFormOpen={this.loginFormOpen} />
        header=<PrimarySearchAppBar/>
        loginForm=<LoginForm show={this.state.loginModel} onHide={this.loginFormClose} forgotPassword={this.openForgotPassword}/>;
        resetPassword=<ForgotPassword show={this.state.openForgotPassword} onHide={this.closeForgotPassword} />
      }
    return (
      <div className="container-fluid">
      <div style={{height:'100%' }} className="row">
      {header}
      </div>
      <SideDrawer />
      <div className="appMenuBar row" mouseover={this.state.mouseOver} onMouseOver={this.mouseover} onMouseOut={this.mouseout} onPointerOut={this.mouseout}>
      <MenuBar  />
      </div>
      <div>
     {loginForm}
     {resetPassword}
      </div>
  <div className="container-fluid">
    <div className="row row-no-padding">
    <div className="col-sm-4">

<div className="filterDiv">
      <Filter />
</div>
      </div>

  <div className="col-sm-8">
  <div className="row row-no-padding">
      <div className="cardClass">
      <Card />
      </div>
  </div>
  </div>
    </div>
  </div>
  <Card1 />
      </div>
    );
  }
}

export default App;
