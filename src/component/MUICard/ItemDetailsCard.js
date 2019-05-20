import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import imageURL from "./1.jpg";
const styles = theme => ({
  card: {

    cursor:'pointer',
    padding:0,
    boxShadow:'0 0 0 0',
    '&:hover, &$focusVisible': {
         boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    }

  },
  media: {
    height: 300,
    width:300,
    margin:'auto',
    '&:hover, &$focusVisible': {
         boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    }
  },
  actions: {
    display: 'flex',
  },

});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };


  render() {
    const { classes } = this.props;

    return (
      <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper className={classes.paper}>
        <Card>
        <CardMedia
          className={classes.media}
          image={imageURL}
          title="Paella dish"
        />
        <CardContent>
        
          <Typography component="h6">
            On HDFC debit & credit card EMI. *T&C Apply
          </Typography>
          <Typography component="p">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </Typography>
        </CardContent>
   </Card>
      </Paper>
      </Grid>
      </Grid>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
