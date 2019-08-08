import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { moviesChangeStars, moviesChangeSearch } from 'modules/movies/actions';
import CardMovie from 'components/CardMovie';
import uniqueId from 'lodash/uniqueId';
import Typography from '@material-ui/core/Typography';
import StarFilter from 'components/StarFilter';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    props.moviesChangeSearch('');
    props.moviesChangeStars({ star: 5 });
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <Container fixed>
        <StarFilter />
        <Grid container direction="row" spacing={2} justify="center" style={{ marginTop: '10px' }}>
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
        </Grid>
      </Container>
    );
  }
}

Home.propTypes = {
  moviesChangeStars: PropTypes.func.isRequired,
  moviesChangeSearch: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ movies }) => ({ ...movies });

export default connect(
  mapStateToProps,
  { moviesChangeStars, moviesChangeSearch },
)(Home);
