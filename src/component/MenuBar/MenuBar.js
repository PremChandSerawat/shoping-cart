import React from 'react';
import ReactDOM from 'react-dom';
import './MenuBar.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import axios from 'axios';
import { IoIosArrowUp } from "react-icons/io";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const styles = {
  card: {
  width:100
  },
  cardDiv:{
    position:'fixed',
    top:'30px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper:{

  },
};




class MenuBar extends React.Component {

  constructor(props) {
    super(props);
    this.openSubMenu=this.openSubMenu.bind(this);
    this.closeSubMenu=this.closeSubMenu.bind(this);
    this.rotate=this.rotate.bind(this);
    this.unrotate=this.unrotate.bind(this);
    this.state={
     rotateClass :"",
     subMenuDivClass:"hideDiv",
     menu :[],
     subMenu:[],
     subMenuId:'',
   };
  }
  rotate =(e)=>{
    e.target.id="arrowIconmenu1";

      }


  unrotate =(e)=>{
    e.target.id="";
  }

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
  closeSubMenu=(e)=>{
    console.log("ClickAwayListener");
   this.setState({
     subMenuDivClass:"hideDiv"
   })
  }
  openSubMenu=(id,subMenu)=>{
    console.log("mouse over the elemet");
    this.setState({subMenu,
      subMenuDivClass:"subMenuDiv",
      subMenuId:id,
    });
  console.log("id",id);
  }
render(){

  const { classes } = this.props;
return(
<ClickAwayListener >
<Card className={classes.cardDiv} onMouseOut={this.closeSubMenu}>
    <ul className="menuBar12" >
   {this.state.menu.map((menu1)=>{
      return(
         <List className="listItem" onMouseOver={()=>{this.openSubMenu(menu1.id,menu1.subMenu)}} >
        {menu1.name}{this.state.subMenuId==menu1.id ?  <ExpandMore /> : <ExpandLess />}
        </List>

     )})
     }

     </ul>
     <Paper className={classNames(this.state.subMenuDivClass,classes.paper)}>
              {this.state.subMenu.map((subMenu1)=>{
                 return(
                <div className="col-sm-3">
            <List className="subMenuItem" key={subMenu1.name} >
            <Typography component="h6">
           {subMenu1.name}
           </Typography>
             </List>
             </div>

    ) })}
  </Paper>
</Card>
</ClickAwayListener>
   );
}
}
MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
