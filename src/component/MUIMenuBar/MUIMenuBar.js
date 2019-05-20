import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import axios from "axios";
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display:'inline-inline',
  },
  menuList:{
    display:'inline',
  },
  listItem:{
    display:"inline",

  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class MenuBar extends React.Component {
  state = {
    open: false,
    rotateClass :"",
    menu :[],
    subMenu:[],
  };
  componentDidMount() {
    console.log("menu items form menu bar");
    axios.get("http://localhost:5000/data2")
      .then((res) => {
        console.log("resquest are ",res);
        const menu=res.data;
        console.log("request data ",res.data);
        this.setState({menu})
      })
  }

  render() {
    const { classes }=this.props;
    return (
      <div className={classes.menuList}>
      <List className={classes.menuList}>
        {this.state.menu.map(menu1=>{
          return(
            <ListItemText className={classes.menuList}>
              {menu1.name}
            </ListItemText>
          );
        })

        }
      </List>
</div>
    );
  }
}

MenuBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(MenuBar);
