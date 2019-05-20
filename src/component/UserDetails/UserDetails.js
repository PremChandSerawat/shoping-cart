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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ProfileEditForm from "./ProfileEditForm.js";
import ManageAddresh from "./ManageAddresh.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


const styles = theme => ({
  card: {
    margin:10,
  },
  collapseDiv:{
    paddingRight:18,
    [theme.breakpoints.up('sm')]: {
      display:'none',
   },
  },
  editorGrid:{
    [theme.breakpoints.down('xs')]: {
      display:'none',
    },
  },
  paper:{
    margin:10,
    paddingRight:15
  },
  listTextPadding:{
    marginLeft:55
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expandButton:{
    position:'absolute',
    right:15,
    float:'right',
    [theme.breakpoints.up('sm')]: {
      display:'none',
  },
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





class UserDetails extends React.Component {
     state={
       open:false,
       editProfileForm:false,
       manageAddressForm:false,
     }

     handleCollapseMenu = () => {
         this.setState(state => ({ open: !state.open,
              editProfileForm:false,
            manageAddressForm:false,  }));
       };
      handleEditProfileButton = () => {
        this.setState(state => ({ editProfileForm: !state.editProfileForm,
                                   manageAddressForm:false,
                                    open:false, }));
      };
      handleManageAddressForm = () => {
        this.setState(state => ({ manageAddressForm: !state.manageAddressForm,
                                   open:false,
                                  editProfileForm:false, }));
      };



  render()
  {
    const { classes } = this.props;
    return(
      <Router>
      <Grid container>
      <Grid item md={3} sm={5} xs={12} lg={3}>

      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title="Hello User"
        />
      <Divider/>
      <CardContent>
          <Typography component="p">
            thank you
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
      <List>
      <ListItem button>
        <ListItemIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem button onClick={this.handleCollapseMenu}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="My Orders" />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <Divider variant="middle"/>

      <ListItem onClick={this.handleEditProfileButton}>
      <ListItemIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </ListItemIcon>
<Link to="/editProfile"><ListItemText primary="Edit profile" /></Link>
      {this.state.editProfileForm ? <ExpandLess onClick={this.handleEditProfileButton} className={classes.expandButton}/> : <ExpandMore onClick={this.handleEditProfileButton} className={classes.expandButton}/>}
      </ListItem>
      <Collapse in={this.state.editProfileForm} className={classes.collapseDiv}>
      <ProfileEditForm />
      </Collapse>
      <Divider variant="middle"/>






        <ListItem button onClick={this.handleManageAddressForm}>
        <ListItemIcon>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z"/></svg>
        </ListItemIcon>
  <Link to="/manageAddresses"><ListItemText primary="Manage Addresses"/></Link>
        {this.state.manageAddressForm ? <ExpandLess onClick={this.handleEditProfileButton} className={classes.expandButton}/> : <ExpandMore onClick={this.handleEditProfileButton} className={classes.expandButton}/>}
        </ListItem>

          <Collapse in={this.state.manageAddressForm} className={classes.collapseDiv}>
          <ManageAddresh />
          </Collapse>
      </List>
      </Card>
      </Grid>
      <Grid item lg={9} md={9} sm={7} xs={12} className={classes.editorGrid}>
         <Paper className={classes.paper}>
          <Switch>
          <Route path="/profile" component={null} />
          <Route path="/editProfile" component={ProfileEditForm}/>
          <Route path="/manageAddresses" component={ManageAddresh}/>
          </Switch>

         </Paper>

       </Grid>
      </Grid>
      </Router>
    )
  }
}
UserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(UserDetails);
