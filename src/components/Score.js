import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = {
  container: {
    width: '80px',
    height: '80px',
    backgroundColor: '#fc3',
    borderRadius: '5px',
  },
  text: {
    padding: '20px',
    color: '#fff',
  },
};

const Score = ({ average, classes, right }) => (
  <Grid
    item
    xs={12}
    className={classes.container}
    style={{ marginLeft: right ? '45%' : '', marginTop: right ? '0px' : '40px' }}
  >
    <h1 className={classes.text}>{average}</h1>
  </Grid>
);

Score.propTypes = {
  average: PropTypes.number.isRequired,
  classes: PropTypes.shape({}).isRequired,
  right: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Score);
