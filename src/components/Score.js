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
    marginTop: '40px',
  },
  text: {
    padding: '20px',
    color: '#fff',
  },
};

const Score = ({ average, classes }) => (
  <Grid item xs={12} className={classes.container}>
    <h1 className={classes.text}>{average}</h1>
  </Grid>
);

Score.propTypes = {
  average: PropTypes.number.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Score);
