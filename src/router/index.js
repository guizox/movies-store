/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from 'containers/home';
import Detail from 'containers/detail';

const Router = ({ history }) => {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect from="/" to="/home" />
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
};

export default Router;
