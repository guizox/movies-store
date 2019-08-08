import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

class AsyncComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { Component: AsyncComponent.Component };
    Nprogress.start();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async componentDidMount() {
    const { loader, isFetching } = this.props;
    if (!this.state.Component | isFetching) {
      loader()
        .then(Component => {
          Nprogress.done();
          AsyncComponent.Component = Component;
          this.setState({ Component });
        })
        .catch(err => console.error('error at asyncComponent', err));
    }
  }

  render() {
    const { collection } = this.props;
    if (this.state.Component) {
      return <this.state.Component {...this.props} {...collection} />;
    }

    return <div />;
  }
}

const mapStateToProps = ({ auth: { isFetching } }) => ({
  isFetching,
});

const AsyncContainer = connect(mapStateToProps)(AsyncComponent);

export default (loader, collection) => () => (
  <AsyncContainer loader={loader} collection={collection} />
);
