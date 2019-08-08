import React, { PureComponent } from 'react';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

export default function asyncComponent(importComponent) {
  class AsyncFunc extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
      Nprogress.start();
    }

    componentWillUnmount() {
      this.mounted = false;
    }
    async componentDidMount() {
      try {
        const { default: Component } = await importComponent();
        this.setState({ component: <Component {...this.props} /> }, () => Nprogress.done());
      } catch (err) {
        console.error('ASyncFunc error', err);
      }
    }

    render() {
      const Component = this.state.component || <div />;
      return Component;
    }
  }
  return AsyncFunc;
}
