/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from 'containers/Home';
import SearchMovies from 'components/SearchMovies';

const Router = ({ history }) => {
  return (
    <Fragment>
      <SearchMovies />
      <div style={{ marginTop: '20px' }}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route strict path="/" component={Home} />
          </Switch>
        </ConnectedRouter>
      </div>
    </Fragment>
  );
};

export default Router;
