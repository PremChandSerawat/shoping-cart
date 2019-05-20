import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import {BrandUrl} from '../../ServicesUrl/ServicesUrl.js';
import {minRange,maxRange,step} from '../../ServicesUrl/range.js';
const styles = theme => ({
  root: {
      padding:20,
  },
  formControl:{

  },
  fontSize:{
    fontWeight:600,
  },
  cancleButton:{
    float:'right',
    position:'relative',
    top:'-20px',
    right:'10px',
    color:'blue',
    cursor:'pointer',
  },
  textField:{
    height:30,
  },
  priceDiv:{
    display:'flex',
    paddingBottom:10,
  },
  rangeText:{
    display:'flex',
    justifyContent:'center'

  },
  container:{

  },
  priceTextDiv:{
    margin:10,
  },
});

class FilterSheet extends React.Component {

     constructor(props){
     super(props);
     this.state={
       initialbrand:[],
       allBrands:[],
       isCategoriesOpen:true,
       // range:{
       //   min:minRange,
       //   max:maxRange,
       // },
       min:0,
       max:1000,
       optionMin:{

       },
       optionMax:{

       },
       isSizeOpen:false,
       size:[],
       brand:[],
       isOptionUpdate:true,
     }
   }
     componentDidMount() {
       console.log("menu items form menu bar");
       axios.get(BrandUrl)
         .then((res) => {
           console.log("resquest are ",res);
           const allBrands=res.data;
           const initialbrand=res.data;

           this.setState({allBrands,initialbrand});
             console.log("all brands",allBrands);
         })

     }
    filterList=(event)=>{
      console.log("event value",event.target.value);
       if(event.target.value==null||event.target.value==undefined||event.target.value=='')
          {
            console.log("in if");
            this.setState({
              allBrands:this.state.initialbrand,
            })
            return;
          }
      var filterBrandName=event.target.value.toLowerCase();
      console.log("brand search",filterBrandName);
       var updatedList=[];
       var secondlist=[];
       secondlist=this.state.allBrands;
       console.log("secondList",secondlist);



       // updatedList = updatedList.filter(function(item){
       //   return item.toString().toLowerCase().search(
       //     event.target.value.toLowerCase()) !== -1;
       // });
       // this.setState({allBrands: updatedList});
       //
       //


       for (let i = 0; i < secondlist.length; i++) {

              if(secondlist[i].name.toString().toLowerCase().indexOf(filterBrandName)>-1)
              {
                 updatedList.push(secondlist[i]);

              }
           }
          this.setState({
            allBrands:updatedList,
          })
  }









   handleSizeFilter=()=>{
     this.setState(state=>({
       isSizeOpen:!state.isSizeOpen,
     }))
   }
   handleSize =name=>event=> {

 };
  // rangeChange=(range: number[]) => {
  //   this.setState({ range:{
  //     min:range[0],
  //     max:range[1],
  //   }});
  //   console.log(this.state.range);
  // };

  addbrand=name=>event=>{
    if(event.target.checked)
      {
        this.state.brand=this.state.brand.concat([event.target.value]);
     }else{
          var index = this.state.brand.indexOf(event.target.value);
          if (index > -1) {
           this.state.brand.splice(index, 1);
          }
          console.log(this.state.brand);
     }

    console.log();
console.log("add brand",this.state.brand);
  };
//this function set min price
//   setMinRange=name=>e=>{
//     console.log('min range value',e.target.value);
//     this.setState({
//       min:e.target.value,
//     });
// console.log("min state",this.state.min);
//   };
//
setMaxRange=name=>e=>{
console.log(e.target.value);
  this.setState({
    [name]:e.target.value,
  });
console.log("max state",this.state.max);
console.log("min state ",this.state.min);
};


render(){

  const { classes } = this.props;
  const optionMin=[];
  const optionMax=[];
  for (let j = 0; j<= this.state.max; j+=100) {
    optionMin.push(
<option  key={j} value={j}>
      {j}
    </option>);
  }
  for (let i = this.state.min; i<= 1000; i+=100) {
      optionMax.push(
  <option key={i} value={i}>
        {i}
      </option>);

  }

  return (
    <Grid sm={12} md={3} className={classes.container} >
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
        Filter
        </Typography>
    <Divider />
        <Typography component="p">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          Categories
        </Typography>
        <Collapse in={this.state.isCategoriesOpen}>
           <ul>
     <li>
    categories1
     </li>
           </ul>
        </Collapse>
    <Divider />

<div className={classes.priceTextDiv}>
    <Typography component="p">
Price
    </Typography>
    <Typography component="p" className={classes.cancleButton}>
Clear
    </Typography>
    </div>

  <div className={classes.priceDiv}>
  <Grid xs={5}>
  <TextField
          id="minSelect"
          select

          className={classes.textField}
          value={this.state.min}
          fullWidth="true"
          onChange={this.setMaxRange('min')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          variant="outlined"
        >
{
   optionMin
      }




        </TextField>
        </Grid>
        <Grid xs={2} className={classes.rangeText}>
        <Typography  component='p' classes={classes.fontSize}>
    to
        </Typography>
        </Grid>
        <Grid xs={5}>
        <TextField
                id="maxSelect"
                select

                className={classes.textField}
                value={this.state.max}
                onChange={this.setMaxRange('max')}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                fullWidth="true"
                variant="outlined"
              >
{
  optionMax
}
              </TextField>
              </Grid>
           </div>

  <div>

  <List>
  <Divider />
        <ListItem button onClick={this.handleSizeFilter}>
          <ListItemText primary="SIZE" />
          {this.state.isSizeOpen ? <ExpandLess onClick={this.handleEditProfileButton} className={classes.expandButton}/> : <ExpandMore onClick={this.handleEditProfileButton} className={classes.expandButton}/>}
        </ListItem>
        <Collapse in={this.state.isSizeOpen}>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox  onChange={this.handleSize('2XS')} value="2XS" />
              }
              label="2XS"
            />

          </FormGroup>

        </Collapse>
  <Divider />
  </List>
  <Input
          id="searchBrand"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Brand"
          fullWidth="true"
          onChange={this.filterList}
        />


                <FormGroup>
                {this.state.allBrands.map((Allbrand)=>{
                  return(
                  <FormControlLabel
                    control={
                      <Checkbox key={Allbrand.id} onChange={this.addbrand(Allbrand.name)}  value={Allbrand.name} />
                    }
                    label={Allbrand.name}

                  />
                )
                })}
                </FormGroup>
          </div>
      </Paper>
    </Grid>
  );
}
}
FilterSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterSheet);
