import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  link: {
    '&:hover': {
          cursor:"pointer",
          textDecoretion:"underline",
        }
  },
  icon:{
    color:"white",

  },
  dense: {
    marginTop: 16,
  },
  margin: {
    margin: theme.spacing.unit,
  },
perHead :{
  margin:20,
},
  formControl: {
    margin: theme.spacing.unit,
    padding:1,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  marginLeft:{
    marginLeft:10
  },
});



const State = [
"Andhra Pradesh",
"Arunachal Pradesh",
"Assam – Dispur",
"Bihar – Patna",
"Goa – Panaji",
"Gujarat – Gandhinagar",
"Haryana – Chandigarh",
"Himachal Pradesh",
"Jammu & Kashmir",
"Karnataka – Bengaluru",
"Kerala",
"Madhya Pradesh – Bhopal",
"Maharashtra – Mumbai",
"Manipur – Imphal",
"Meghalaya – Shillong",
"Mizoram – Aizawl",
"Nagaland – Kohima",
"Orissa",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Tripura",
"Uttar Pradesh",
"West Bengal – Kolkata",
"Chhattisgarh – Raipur",
"Uttarakhand – Dehradun",
"Jharkhand – Ranchi",
"Telangana – Hyderabad"

];




class ProfileEditForm extends React.Component {
  state = {
    inputProps:{
      readOnly:true
    },
    editText:"Edit"
  };

handleEditName=()=>{
  const isEdit =this.state.inputProps.readOnly;
  if(this.state.editText==="Edit")
  {
  this.setState({
  inputProps:{
      readOnly:!isEdit
    },
    editText:"Cancel"
  })}else{
    this.setState({
    inputProps:{
        readOnly:!isEdit
      },
      editText:"Edit"
    })
  }
}
  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    const { classes } = this.props;



    return (
      <div className={classes.container}>
      <Typography variant="h6" color="primary" alignLeft className={classes.perHead}>
       Add New Addresh
     </Typography>
   <Grid container>
   <Button color="primary" variant="contained"  className={classes.marginLeft}>

   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="-fgCFc"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path class="" fill="#fff" d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"></path></g></svg>
   <span className={classes.marginLeft}>use current location</span>
  </Button>
   </Grid>
     <Grid container style={{marginTop:35}} spacing={16}>
     <Grid item xs={12} sm={6} >
      <TextField
        id="outlined-email-input"
        label="Full Name"
        className={classes.textField}
        type="text"
        name="fName"
        fullWidth="true"
        autoComplete="text"
        variant="outlined"
        InputProps={this.state.inputProps}
      />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-email-input"
        label="Contect Number"
        className={classes.textField}
        type="number"
        fullWidth="true"
        name="mobNumber"
        autoComplete="text"

        variant="outlined"
      />
      </Grid>
      </Grid>
  <Grid container style={{marginTop:35}} spacing={16}>
  <Grid item xs={6} >
   <TextField
     id="outlined-email-input"
     label="Pin code"
     className={classes.textField}
     type="text"
     name="fName"
     fullWidth="true"
     autoComplete="text"
     variant="outlined"
     InputProps={this.state.inputProps}
   />
   </Grid>
   <Grid item xs={6}>
   <TextField
     id="outlined-email-input"
     label="Locality"
     className={classes.textField}
     type="number"
     name="mobNumber"
     fullWidth="true"
     autoComplete="text"
     minRow={6}
     variant="outlined"
   />
   </Grid>
   </Grid>
   <Grid container spacing={16}>
   <Grid item xs={12} style={{marginTop:35}} >
   <TextField
           id="outlined-multiline-flexible"
           label="Addresh"
           multiline
           rowsMax="4"
           value=""
           rows="3"
           onChange=""
           className={classes.textField}
          fullWidth="true"
           variant="outlined"
         />
         </Grid>
         </Grid>
   <Grid container style={{marginTop:35}} spacing={16}>
   <Grid item xs={6} >
    <TextField
      id="outlined-email-input"
      label="City/District/Town"
      className={classes.textField}
      type="text"
      name="fName"
      fullWidth="true"
      autoComplete="text"
      variant="outlined"
      InputProps={this.state.inputProps}
    />
    </Grid>
    <Grid item xs={6} >
     <TextField
       id="outlined-email-input"
       label="City/District/Town"
       className={classes.textField}
       type="text"
       name="fName"
       fullWidth="true"
       autoComplete="text"
       variant="outlined"
       InputProps={this.state.inputProps}
     />
     </Grid>

    <Grid item xs={6}>
    <TextField
          id="outlined-select-currency-native"
          select
          label="State"
          className={classes.textField}
          value={this.state.currency}
          onChange=""
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your State"
          fullWidth="true"
          variant="outlined"
        >
          {State.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
    </Grid>
    </Grid>
    <Button size="large" className={classes.margin} color="primary" variant="contained">
      Update
    </Button>
      </div>
    );
  }
}

ProfileEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileEditForm);
