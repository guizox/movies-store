import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { moviesSetSelectedMovie } from 'modules/movies/actions';
import Score from 'components/Score';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

const styles = {
  header: {
    backgroundColor: 'black',
    height: '300px',
  },
  title: {
    fontWeight: 600,
    color: 'white',
    fontFamily: 'Helvetica,Arial,sans-serif',
  },
  contentContainer: {
    marginTop: '20px',
  },
  banner: {
    width: '260px',
    height: '400px',
  },
  typography: {
    fontFamily: 'Helvetica,Arial,sans-serif',
  },
  typographyContainer: {
    marginTop: '15px',
  },
  rightPanel: {
    textAlign: 'right',
  },
  score: {
    padding: '20px 0px',
    color: '#fff',
  },
  voteCount: {
    marginTop: '80px',
  },
};

class Detail extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
    } = props;
    props.moviesSetSelectedMovie(id);
  }

  render() {
    const { selectedMovie, classes } = this.props;
    return selectedMovie ? (
      <Fragment>
        <Grid container direction="row" className={classes.header}>
          <Container fixed>
            <Grid container direction="row" xs={12}>
              <Grid item xs={6}>
                <h1 className={classes.title}>{selectedMovie.title}</h1>
                <h3 className={classes.title}>
                  {selectedMovie.release_date ? selectedMovie.release_date.substr(0, 4) : ''}
                </h3>
                <hr />
                <Grid container direction="row">
                  <Grid item xs={6}>
                    <h2 className={classNames(classes.score, classes.title)}>Score </h2>
                  </Grid>
                  <Grid item xs={6}>
                    <Score average={selectedMovie.vote_average} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} className={classes.rightPanel}>
                <h1 className={classes.title}>{`${
                  selectedMovie.original_language
                    ? selectedMovie.original_language.toUpperCase()
                    : ''
                }`}</h1>
                <h3 className={classes.title}>{`Popularity : ${selectedMovie.popularity}`}</h3>
                <hr />
                <h3 className={classNames(classes.voteCount, classes.title)}>{`Vote Count : ${
                  selectedMovie.vote_count
                }`}</h3>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Container fixed className={classes.contentContainer}>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={3}>
              <img
                src={
                  selectedMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${selectedMovie.poster_path}`
                    : 'https://cdn.dribbble.com/users/24885/screenshots/1797793/events-empty-data-set.png'
                }
                className={classes.banner}
                alt={selectedMovie.poster_path}
              />
            </Grid>

            <Grid item xs={9}>
              <Grid item xs={12} className={classes.typographyContainer}>
                <Typography variant="h1" className={classes.typography}>
                  {'Movie Details & Credits'}
                </Typography>
              </Grid>

              <Grid item xs={12} className={classes.typographyContainer}>
                <Typography variant="subtitle" className={classes.typography}>
                  {`${selectedMovie.original_title} - Release Date : ${moment(
                    selectedMovie.release_date,
                  ).format('DD/MM/YYYY')}`}
                </Typography>
              </Grid>

              <Grid item xs={12} className={classes.typographyContainer}>
                <Typography paragraph>{selectedMovie.overview}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    ) : (
      <Container>...Loading</Container>
    );
  }
}

Detail.propTypes = {
  match: PropTypes.shape({}).isRequired,
  selectedMovie: PropTypes.shape({}).isRequired,
  moviesSetSelectedMovie: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ movies }) => ({ selectedMovie: movies.selectedMovie });

export default connect(
  mapStateToProps,
  { moviesSetSelectedMovie },
)(withStyles(styles)(Detail));
