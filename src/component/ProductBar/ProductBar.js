import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
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
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import image from './1.jpeg';
const styles = theme => ({
  media: {
    height: '220px',
    width:'110px',
    marginTop:5,
    marginLeft:'auto',
    marginRight:'auto',
       // 16:9
  },

  card: {
   margin:5,
   '&:hover media': {
     transform:'scale(1.5,1.5)',
   },
  },
  mediaDiv:{
    width:'16.66%',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
    },
  },
  actions: {
    display: 'flex',
  },
mediaContent:{
fontWeight:'bold',
textAlign:'center',
  },
  mediaContent1:{
  color:'green',
  textAlign:'center',
    },
    mediaContent2:{
      color:'#bdbdbd',
       fontWeight:'lighter',
    textAlign:'center',
      },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ProductBar extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader

          action={
        <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
          }
          title="Mobile New Launches"
          subheader="September 14, 2016"
        />
        <Divider/>
        <div style={{display:'flex',padding:2,}}>
        <div className={classes.mediaDiv}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
        <CardContent >
          <Typography component="p" className={classes.mediaContent}>
            Redmi Note 7
          </Typography>
          <Typography component="p" className={classes.mediaContent1}>
            From ₹9,999
          </Typography>
          <Typography className={classes.mediaContent2}>
            UP to 4GB RAM
          </Typography>
        </CardContent>
        </div>
        <div className={classes.mediaDiv}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p" className={classes.mediaContent}>
            Redmi Note 7
          </Typography>
          <Typography component="p" className={classes.mediaContent1}>
            From ₹9,999
          </Typography>
          <Typography className={classes.mediaContent2}>
            UP to 4GB RAM
          </Typography>
        </CardContent>
        </div>
        </div>

      </Card>
    );
  }
}

ProductBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductBar);
