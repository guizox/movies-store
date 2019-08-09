import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { moviesChangeStars } from 'modules/movies/actions';
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
          onStarClick={star =>
            star !== props.stars &&
            props.moviesChangeStars({ star, apiToCall: props.search !== '' ? 'search' : '' })
          }
        />
      </Grid>
    </Grid>
  </Paper>
);

StarFilter.propTypes = {
  width: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  moviesChangeStars: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const mapStateToProps = ({ movies }) => ({ stars: movies.selectedStars, search: movies.search });

export default connect(
  mapStateToProps,
  { moviesChangeStars },
)(withWidth()(StarFilter));
