import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

function SearchMovies(props) {
  const [value, setValue] = useState(props.search);
  const classes = useStyles();

  useEffect(
    () => {
      props.moviesChangeSearch(value);
      value === '' && props.search !== '' && props.moviesRequest();
    },
    [value, props],
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" spacing={1} justify="center">
            <Grid
              item
              container
              xs={4}
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
                  style={{ padding: '6px 26px', color: '#f6f7f6' }}
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
