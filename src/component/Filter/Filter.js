import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "../MUICard/MUICard.js";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import FilterSheet from "..//Filter2/Filter2.js";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const styles = theme => ({
  root: {
    width:'100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin:0,
  },
  filter:{
    [theme.breakpoints.down('sm')]: {
      display:'none',
  },
},
dialogStyle:{
width:'600px',
height:'100%',

},
paper:{
  overflowX:'hidden',
},
filterNav:{
display:'flex',
paddingTop:20,
paddingBottom:40,
[theme.breakpoints.up('md')]: {
  display:'none',
},
},
clearButton:{
  position:'absolute',
  right:60,
},
mdFilter:{
  [theme.breakpoints.up('md')]:{
    display:'none',
  },
},
cardBody:{
  display:'inline',
},
cancleButton:{
position:'absolute',
left:1,
},
filterDialog:{
marginTop:50,
},
sortNav:{
  position:'absolute',
  float:'left',
  left:50,
},
filterDiv:{
float:'right',
position:'absolute',
right:50,
},
ulStyle:{
  listStyle:"none",
},
categories:{
  margin:10,
},

});

class PaperSheet extends React.Component {
        constructor(props)
        {
          super(props);
          this.state={
            openSortModel:false,
            sortBy:'byName',
            openFilterModel:false,
          }
        }
//to handle sort model
handleSortModel=()=>{
  console.log("state is Chandge");
  this.setState(state=>({
  openSortModel:!state.openSortModel,
}))

console.log("state is Chandge",this.state.openSortModel);
}
//handle sort radio button value
handleSortRadioButton = event => {
  console.log("sort Event",this.state.sortBy);
    this.setState({ sortBy: event.target.value });
  };

//handle filter Model
handleFilterModel=()=>{
  console.log("state is Chandge");
  this.setState(state=>({
  openFilterModel:!state.openFilterModel,
}))

console.log("state is Chandge",this.state.openFilterModel);
}

render(){
  const { classes } = this.props;

  return (
<div>
    <Dialog

          onBackdropClick={this.handleSortModel}
          scroll="body"
          open={this.state.openSortModel}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          classes={{paper:classes.paper}}
        >
    <DialogContent  className={classes.dialogStyle}>
    <FormControl component="fieldset" className={classes.formControl}>
       <FormLabel component="legend">Sort by</FormLabel>
       <RadioGroup
         aria-label="SortBy"
         name="sortBy"
         className={classes.group}
         value={this.state.sortBy}
         onChange={this.handleSortRadioButton}
       >
         <FormControlLabel value="byName" control={<Radio />} label="ByName" />
         <FormControlLabel value="popularity" control={<Radio />} label="Popularity" />
         <FormControlLabel value="price_High_to_Low" control={<Radio />} label="Price High to Low" />
         <FormControlLabel value="price --Low to High" control={<Radio />} label="Price --Low to High" />
         <FormControlLabel value="newestFirst" control={<Radio />} label="NewestFirst" />
       </RadioGroup>

     </FormControl>
</DialogContent>
<Divider />
<DialogActions>
            <Button onClick={this.handleSortModel} color="primary" className={classes.cancleButton}>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Apply
            </Button>
          </DialogActions>
     </Dialog>

  <Dialog
          fullScreen
          open={this.state.openFilterModel}
          onClose={this.handleClose}
          onBackdropClick={this.handleFilterModel}

    >
    <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close" onClick={this.handleFilterModel}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Filter
              </Typography>
              <Button color="inherit" className={classes.clearButton}>
                Clear
              </Button>
            </Toolbar>
      </AppBar>
      <div className={classes.filterDialog}>
      <FilterSheet />
      </div>
  </Dialog>

<Paper square='true' elevation={1} className={classes.filterNav}>

<Typography variant='h6' className={classes.sortNav} onClick={this.handleSortModel} >
Sort By<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
 </Typography>

 <Typography variant='h6' className={classes.filterDiv} onClick={this.handleFilterModel}>
 Filter <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
  </Typography>
</Paper>

   </div>
  );
}
}
PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
