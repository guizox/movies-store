import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {
  moviesChangeStars,
  moviesChangeSearch,
  moviesSetSelectedMovie,
} from 'modules/movies/actions';
import CardMovie from 'components/CardMovie';
import uniqueId from 'lodash/uniqueId';
import Typography from '@material-ui/core/Typography';
import StarFilter from 'components/StarFilter';
import PropTypes from 'prop-types';
import SearchMovies from 'components/SearchMovies';

class Home extends React.Component {
  constructor(props) {
    super(props);
    props.moviesChangeSearch('');
    props.moviesChangeStars({ star: 5 });
    props.moviesSetSelectedMovie();
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <Fragment>
        <SearchMovies />
        <Container fixed>
          <StarFilter />
          <Grid
            container
            direction="row"
            spacing={2}
            justify="center"
            style={{ marginTop: '10px' }}
          >
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography variant="h2">Movies List</Typography>
            </Grid>
            {!isLoading
              ? data.map(movie => (
                  <Grid item xs={12} sm={6} md={4} key={uniqueId(movie.title)}>
                    <CardMovie movie={{ ...movie, isLoading }} />
                  </Grid>
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                  <Grid item xs={12} sm={6} md={4} key={uniqueId(n)}>
                    <CardMovie movie={{ isLoading }} />
                  </Grid>
                ))}
            {data.length === 0 && (
              <Grid container direction="row" spacing={1} justify="center">
                <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Typography variant="h3">
                    There is no data with the filters that you created.
                  </Typography>
                  <Typography variant="h3">Let's try another one?</Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

Home.propTypes = {
  moviesChangeStars: PropTypes.func.isRequired,
  moviesChangeSearch: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  moviesSetSelectedMovie: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movies }) => ({ ...movies });

export default connect(
  mapStateToProps,
  { moviesChangeStars, moviesChangeSearch, moviesSetSelectedMovie },
)(Home);
