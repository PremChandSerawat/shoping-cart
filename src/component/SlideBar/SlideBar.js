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
  //  display:'inline-block',
   overflowX:'auto',
   whiteSpace:'nowrap',
  // overflowY:'hidden',

  },
  link:{
    display: 'inlineBlock',
   color: 'white',
   textAlign: 'center',
   padding: '14px',
   textDecoration: 'none',
  },
  mediaDiv:{
    width:'300px',
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

class SlideBar extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
  <a className={classes.link}>Home</a>
  <a className={classes.link}>News</a>
  <a className={classes.link}>Contact</a>
  <a className={classes.link}>About</a>
  <a className={classes.link}>Support</a>
  <a className={classes.link}>Blog</a>
  <a className={classes.link}>Tools</a>
  <a className={classes.link}>Base</a>
  <a className={classes.link}>Custom</a>
  <a className={classes.link}>More</a>
  <a className={classes.link}>Logo</a>
  <a className={classes.link}>Friends</a>
  <a className={classes.link}>Partners</a>
  <a className={classes.link}>People</a>
  <a className={classes.link}>Work</a>
    <a className={classes.link}>Tools</a>
    <a className={classes.link}>Base</a>
    <a className={classes.link}>Custom</a>
    <a className={classes.link}>More</a>
    <a className={classes.link}>Logo</a>
    <a className={classes.link}>Friends</a>
    <a className={classes.link}>Partners</a>
    <a className={classes.link}>People</a>
    <a className={classes.link}>Work</a>

      </Card>
    );
  }
}

SlideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SlideBar);
