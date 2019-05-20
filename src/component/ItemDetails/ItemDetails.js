import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import OfferImage from './offerImage.png'
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  fab: {
   height:30,
   color:'white',
   fontSize:20,
   backgroundColor:'green',
   '&:hover': {
backgroundColor:'green'
 },
 },
 checkText:{
   cursor: 'not-allowed',
 },
 fabDiv:{
   display:'flex'
 },
 pinCodeDiv:{
   marginTop:20,
 },
 offerDiv:{
   display:'flex',
   marginTop:10,
 },
 fabText:{
   fontSize:25,
 },
 offerImage:{
   height:30,
   width:30,
 },
 tableDiv:{
   display:'flex',
 },
 productDetailsTable:{
   fontSize:20,
 },
  cssRoot: {
    fontColor:grey,
    position:'absolute',
    right:0,
    marginRight:6,
    cursor:'pointer',
    color: theme.palette.getContrastText(grey[500]),
      '&:hover': {
color: grey[900],
    },
  },
  productDetails:{

  },
offer:{
  color:theme.palette.getContrastText(lightGreen[500]),
  fontColor:lightGreen,
},

});

class ItemDetails extends React.Component{
constructor(){
  super();
  this.state={
   productDetails:false,
  }
}
 handleProductDetails=()=>{
this.setState(state=>({
  productDetails:!state.productDetails
}));
}
render(){
  const { classes } = this.props;
  var collapseButton;
  if(!this.state.productDetails){
    collapseButton=<i className="fas fa-plus" style={{color:'gray',float:'right',marginRight:30}}></i>
  }else {
      collapseButton=<i className="fas fa-minus" style={{color:'gray',float:'right',marginRight:30}}></i>
    }
  return(
<Grid container style={{padding:5}}>
<Grid item xs={12}>
<Typography variant="p" component="p" gutterBottom >
path<i  className={classNames(classes.cssRoot,"fas fa-share")}> share</i>
</Typography>

<Typography component="p" variant="display1"  gutterBottom>
Item Name<span></span>
</Typography>
<p style={{color:"green"}}>
<span style={{color:'green',fontWeight:'bold'}}>offer</span>
</p>
<h5>
<i class="fas fa-rupee-sign" style={{color:'black',fontWeight:'bold'}}> 345</i>
</h5>
<div className={classes.fabDiv}>
<Fab variant="extended" className={classes.fab}>
        5<i class="fas fa-star"></i>
      </Fab>
  <Typography variant="display1" className={classes.fabText}>    hekoahsfofiasf</Typography>
</div>
<div className={classes.offerDiv}>
<img src={OfferImage} className={classes.offerImage} />
<p>Special PriceGet extra 5% off (price inclusive of discount)</p>
</div>
<div className={classes.pinCodeDiv}>
<i className="fas fa-map-marker-alt" style={{color:'blue',fontSize:25,}}><span style={{color:'black',fontSize:'20px',fontWeight:'normal',marginLeft:'25px'}}>Deliver to</span></i>
<div>
<Input
             placeholder="Enter Pin Code"
            id="adornment-weight"

            onChange=''

            endAdornment={<InputAdornment position="end"><span className={classes.checkText}>Check</span></InputAdornment>}
            fullWidth='true'            
          />
  </div>
  </div>

<div className={classes.productDetails} >
<Divider style={{marginTop:20,marginBottom:10}}/>
<Typography component="p" variant="h5"  gutterBottom>
<span onClick={this.handleProductDetails} style={{cursor:'pointer'}}>Product Details </span><span onClick={this.handleProductDetails} style={{cursor:'pointer'}}>{collapseButton}</span>
</Typography>
<Collapse in={this.state.productDetails} timeout="auto" unmountOnExit>
<div className={classes.tableDiv}>
<Grid container>
<Grid item xs={4}>
<Typography variant="display1" className={classes.productDetailsTable}>color</Typography>
</Grid>
<Grid item xs={8}>
<Typography variant="display1" className={classes.productDetailsTable} style={{color:'black'}}>color</Typography>
</Grid>
</Grid>
</div>
</Collapse>
<Divider style={{marginTop:10,marginBottom:10}}/>
</div>
</Grid>
</Grid>
            );
}
}
ItemDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemDetails);
