import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.css";
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import image1 from './1.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  imageOuterDiv:{
paddingLeft:'20px',
paddingRight:'20px',
  },
  textField: {
    marginTop:0,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height:'20px',
    position:'relative',
    top:'-10px',
    marginBottom:'10px',
  },
  clearIconClass:{
    backgroundColor: '#fafafa',
  },
  media: {
    position:'relative',
    top:'-30px',
    height: 200,
    width:'100%',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:0,
    marginBottom:0,

  },
  blankMedia:{
    position:'relative',
    top:'45px',
    height:200,
    width:'100%',
    backgroundColor:'#eeeeee',
    borderRadius:'10px'
  },
  root:{
    paddingTop:'10px',
    paddingRight:'10px',
    paddingLeft:'10px',
    paddingBottom:0,
  },
  compareItemDetails:{
    borderStyle:'solid',
    color:'#e0e0e0',
    borderWidth:'0.5px',
    height:'800px',
    width:'100%',
  },
  cardContent:{
    margin:'1px',
    position:'relative',
    top:"-30px",
  },
  cardContent1:{
    position:'relative',
    top:'40px',
    marginBottom:0,
  },
  imageDiv:{
    display:'block',
    height:'200px',
    width:'100%',
    marginTop:'12px',
  marginLeft:'auto',
  marginRight:'auto',

  },
  divder:{
    position:'relative',
    top:'-40px',
  },
  cssRoot: {
    marginTop:0,
    padding:0,
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[800],
    height:'60px',
    '&:hover': {
      backgroundColor: yellow[900],
    },
  },

});

class ItemCompare extends React.Component{
  fixedTop=()=>{
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
console.log(headerHeight');
if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  }
render(){
  const { classes } = this.props;

  return(
    <div>
          <Paper className={classes.root} elevation={1}>
          <Grid container onScroll={this.fixedTop}>
          <Grid item sm={3} >
            <Typography variant="h6" component="h3">
              Compare Honor
            </Typography>

            <div className={classes.imageOuterDiv}>
           <img src={image1} className={classes.imageDiv}/>
            </div>
         <div className={classes.allItemDetailsFixTop} id="myHeader">
            <Typography component="h6" style={{marginTop:'10px'}}>
              3 item
            </Typography>
            <Typography variant="h6" component="h3">
              Compare Honor
            </Typography>

            <FormControlLabel
          control={
            <Checkbox

              onChange=''
              value="checkedB"
              color="primary"
            />
          }
          label="Show only differences"
        />
        </div>
            </Grid>
  <Grid item sm={3}>
            <CardHeader

          action={
            <IconButton className={classes.clearIconClass}>
              <ClearIcon />
            </IconButton>
          }

        />
        <div style={{paddingLeft:'20px',paddingRight:'20px'}}>
     <CardMedia
       className={classes.media}
       image={image1}
       title="Contemplative Reptile"
     />
     </div>
     <CardContent className={classes.cardContent}>
       <Typography gutterBottom variant="p" component="h6">
         Honor 9N (Midnight Black, 32 GB)  (3 GB RAM)
       </Typography>
       <div style={{display:'flex'}} className={classes.allItemDetailsFixTop}>
       <h5>
       <i class="fas fa-rupee-sign" style={{color:'black',fontWeight:'bold'}}> 345</i>
       </h5>
       <p style={{marginLeft:'10px'}}>
       <del style={{color:'gray'}}>₹13,999</del>
       </p>
       <p style={{color:'green',fontWeight:'bold',marginLeft:'10px'}}>
        30% off
       </p>
       </div>
     </CardContent>


              </Grid>

<Grid item sm={3} xs={12}>
<div style={{paddingLeft:'20px',paddingRight:'20px'}}>
<CardMedia
          className={classes.blankMedia}
        />
</div>
<CardContent className={classNames(classes.allItemDetailsFixTop,classes.cardContent1)}>
<h6 style={{color:'black',}}>
Add a product
</h6>

<TextField
          id="brand"
          select
          defaultValue="Enter Brand"
          className={classes.textField}

          onChange=''
          SelectProps={{
            native: true,
          }}
        fullWidth='true'
        >
</TextField>
<TextField
          id="product"
          select
          defaultValue="Enter Brand"
          className={classes.textField}

          onChange=''
          SelectProps={{
            native: true,
          }}
        fullWidth='true'
        >
</TextField>



</CardContent>
</Grid>
</Grid>
<Grid container>
<Grid item sm={3}>
<div className={classes.compareItemDetails}></div>
</Grid>
<Grid item sm={3}>
<div className={classes.compareItemDetails}></div>
</Grid>
<Grid item sm={3}>
<div className={classes.compareItemDetails}></div>
</Grid>
<Grid item sm={3}>
<div className={classes.compareItemDetails}></div>
</Grid>
</Grid>
</Paper>
        </div>


            );
}
}
ItemCompare.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCompare);
