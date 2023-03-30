import React from 'react';
import Home from './pages/home';
import ParseRoute from '../client/lib/parse-route';
import VendorSignup from '../client/pages/vendor-signup';
import VSuccess from '../client/pages/vendor-success';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash)
    };
    this.currentPage = this.currentPage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: ParseRoute(window.location.hash)
      });
    });
  }

  currentPage() {
    const { path } = this.state.route;
    if (path === '') {
      return (
        <Home />
      );
    }
    if (path === 'vendor-signup') {
      return (
        <VendorSignup />
      );
    }
    if (path === 'vendor-success') {
      return (
        <VSuccess />
      );
    }
  }

  render() {
    // return <Home />;

    return (
      <div>
        {this.currentPage()}
      </div>
    );
  }
}
