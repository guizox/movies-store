import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { moviesChangeSearch, moviesRequest } from 'modules/movies/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background:
      'url(https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-Marvel-Movies-Iphone-Background.jpg)',
    height: '400px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginTop: '280px',
    backgroundColor: 'white',
    oppacity: 0.4,
    marginLeft: 0,
    width: '100%',
  },
  inputRoot: {
    color: 'black',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function SearchMovies(props) {
  const [value, setValue] = useState(props.search);
  const classes = useStyles();

  useEffect(() => {
    props.moviesChangeSearch(value);
    value === '' && props.search !== '' && props.moviesRequest();
  }, [value, props]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Grid container direction="row" spacing={1} justify="center">
            <Grid
              item
              container
              xs={8}
              direction="row"
              justify="space-between"
              className={classes.search}
            >
              <Grid item xs={6}>
                <InputBase
                  placeholder="Input your search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  value={value}
                  onChange={ev => setValue(ev.target.value)}
                />
              </Grid>
              <Grid item xs={6} style={{ textAlign: 'right', marginTop: '2px' }}>
                <Button
                  style={{ padding: '6px 26px', color: '#f6f7f6', backgroundColor: '#339FFF' }}
                  onClick={() => props.moviesRequest({ apiToCall: 'search' })}
                >
                  <SearchIcon />
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchMovies.propTypes = {
  search: PropTypes.string.isRequired,
  moviesChangeSearch: PropTypes.func.isRequired,
  moviesRequest: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movies }) => ({ search: movies.search });

export default connect(
  mapStateToProps,
  { moviesChangeSearch, moviesRequest },
)(SearchMovies);
