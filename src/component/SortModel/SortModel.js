import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SortModal extends React.Component {
  state = {
    open: false,
  };
  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.handleSortModel}

        >
        <Grid container>
        <Radio
          value="byName"
          name="sortBy"
          aria-label="A"
        />
        <Typography variant="p" alignLeft >
         Relevance
        </Typography>
        </Grid>
        <Grid container>
        <Radio
          value="Popularity"
          name="sortBy"
          aria-label="A"
        />
        <Typography variant="p" alignLeft >
         Popularity
        </Typography>
        </Grid>
        <Grid container>
        <Radio
          value="Price_High_to_Low"
          name="sortBy"
          aria-label="A"
        />
        <Typography variant="p" alignLeft >
         Price--High to Low
        </Typography>
        </Grid>
        <Grid container>
        <Radio
          value="Price_Low_to_High"
          name="sortBy"
          aria-label="A"
        />
        <Typography variant="p" alignLeft >
         Price --Low to High
        </Typography>
        </Grid>
        <Grid container>
        <Radio
          value="Price_High_to_Low"
          name="sortBy"
          aria-label="A"
        />
        <Typography variant="p" alignLeft >
         Price--High to Low
        </Typography>
        </Grid>
        <Grid container>
        <Radio
          value="NewestFirst"
          name="sortBy"
          aria-label="A"
        />
        <Typography variant="p" alignLeft >
         Newest First
        </Typography>
        </Grid>

        </Modal>
      </div>
    );
  }
}

SortModal.propTypes = {
  classes: PropTypes.object.isRequired,
};
const SortModal1 = withStyles(styles)(SortModal);

export default SortModal1;
