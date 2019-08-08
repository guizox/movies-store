import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { moviesChangeStars } from 'modules/movies/actions';
import Button from '@material-ui/core/Button';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

const StarFilter = props => (
  <Paper style={{ padding: '20px' }}>
    <Grid container direction="row" justify="center" spacing={2}>
      <Grid
        item
        xs={12}
        md={6}
        style={{ textAlign: isWidthUp('md', props.width) ? 'right' : 'center' }}
      >
        <Typography variant="h2">Filter by rating</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{ textAlign: isWidthUp('md', props.width) ? 'left' : 'center' }}
      >
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={props.stars}
          onStarClick={star => props.moviesChangeStars(star)}
        />
        <Button
          disabled={props.stars === 0}
          onClick={() => props.moviesChangeStars(0)}
          style={{ marginBottom: '10px' }}
        >
          Clear Stars
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

StarFilter.propTypes = {
  width: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  moviesChangeStars: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movies }) => ({ stars: movies.selectedStars });

export default connect(
  mapStateToProps,
  { moviesChangeStars },
)(withWidth()(StarFilter));
