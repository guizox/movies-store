import React, { Fragment } from 'react';
import StarRate from '@material-ui/icons/StarRate';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = () => ({
  star: {
    color: 'yellow',
    width: '50px',
    height: '50px',
  },
  text: {
    position: 'absolute',
    marginLeft: '19px',
    fontSize: '10px',
    marginTop: '18px',
  },
});

const StarMovie = ({ rate, classes }) => (
  <Fragment>
    <span className={classes.text}>{rate ? parseFloat(rate).toFixed(1) : ''}</span>
    <StarRate className={classes.star} />
  </Fragment>
);

StarMovie.propTypes = {
  rate: PropTypes.number.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(StarMovie);
