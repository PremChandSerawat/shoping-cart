import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.css";
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.png';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
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
  cssRoot1: {
    marginTop:0,
    padding:0,
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: orange[800],
    height:'60px',
    '&:hover': {
      backgroundColor: orange[900],
    },
  },
});

class CarouselRender extends React.Component{
render(){
  const { classes } = this.props;

  return(
    <Grid container spacing={8} style={{padding:10}}>
    <Grid xs={12}>
    <Carousel showArrows={true}>
                    <div>
                        <img src={image1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={image2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={image3} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={image1} />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={image2}/>
                        <p className="legend">Legend 5</p>
                    </div>
                    <div>
                        <img src={image3} />
                        <p className="legend">Legend 6</p>
                    </div>
                </Carousel>
                </Grid>
<Grid item xs={6}>
<Button size="large" color="primary" fullWidth="true"  className={classNames(classes.cssRoot)}>
  <i class="fa fa-shopping-cart" style={{fontSize:'20px'}} aria-hidden="true">  Add To Cart</i>
   </Button>
   </Grid>
   <Grid item xs={6}>
   <Button  size="large"  color="primary" fullWidth="true"  className={classNames(classes.cssRoot1)}>
<i class="fa fa-bolt" style={{fontSize:'20px'}}>  Buy Now</i>
</Button >
</Grid>
</Grid>
            );
}
}
CarouselRender.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarouselRender);
