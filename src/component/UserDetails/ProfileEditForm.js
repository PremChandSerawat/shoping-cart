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
          textDecoretion:"underline"
        }
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
perHead1 :{
  marginTop:10,
  marginLeft:20
},

  formControl: {
    margin: theme.spacing.unit,
    padding:1,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  marginLeft:{
    marginLeft:30
  },
});

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
      <Typography variant="h6" alignLeft className={classes.perHead}>
       Persional Information
     </Typography>

     <Typography variant="h6" color="primary" alignLeft className={classNames(classes.perHead, classes.marginLeft)}>
  <Link  className={classes.link} onClick={this.handleEditName}> {this.state.editText}</Link>
    </Typography>

     <Grid container spacing={16}>
     <Grid item xs={12} sm={4}>
      <TextField
        id="outlined-email-input"
        label="First Name"
        className={classes.textField}
        type="text"
        name="fName"
        fullWidth="true"
        autoComplete="text"
        variant="outlined"
        InputProps={this.state.inputProps}
      />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
        id="outlined-email-input"
        label="Middle Name"
        className={classes.textField}
        type="text"
        fullWidth="true"
        name="mName"
        autoComplete="text"
        variant="outlined"
      />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
        id="outlined-email-input"
        label="Last Name"
        className={classes.textField}
        type="text"
        fullWidth="true"
        name="lName"
        autoComplete="text"
        variant="outlined"
      />
      </Grid>
      </Grid>
      <Grid container>
      <Typography variant="p" alignLeft className={classes.perHead}>
       Male
      </Typography>
      <Radio
        value="male"
        name="gender"
        aria-label="A"
      />
      <Typography variant="p" alignLeft className={classes.perHead}>
       Female
      </Typography>
      <Radio
        value="female"
        name="gender"
        aria-label="A"
      />
      </Grid>


      <Typography variant="h6" alignLeft className={classes.perHead1}>
       Contect Details
     </Typography>
     <Grid container spacing={16}>
     <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-email-input"
        label="E-mail"
        className={classes.textField}
        type="text"
        name="email"
        fullWidth="true"
        autoComplete="email"
        variant="outlined"
        InputProps={this.state.inputProps}
      />
      </Grid>
      <Grid item xs={12} sm={6} >
       <TextField
         id="outlined-email-input"
         label="Mobile Number"
         fullWidth="true"
         className={classNames(classes.textField)}
         type="text"
         name="email"
         autoComplete="text"
         variant="outlined"
         InputProps={this.state.inputProps}
       />
       </Grid>
      </Grid>
      <Grid container spacing={16}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="outlined-password-input"
          label="Password"
          fullWidth="true"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          InputProps={this.state.inputProps}
        />
        </Grid>
        </Grid>
  <Grid container>
        <Typography variant="h6" alignLeft className={classes.perHead}>
         Your Gender
       </Typography>
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
