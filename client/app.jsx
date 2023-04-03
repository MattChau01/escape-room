import React from 'react';
import Home from './pages/home';
import ParseRoute from '../client/lib/parse-route';
import VendorSignup from '../client/pages/vendor-signup';
import VendorSuccess from '../client/pages/vendor-success';
import VendorSignin from '../client/pages/vendor-signin';

// TEST
// import Header from './components/header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash)
    };
    this.currentPage = this.currentPage.bind(this);
    this.vendorSignin = this.vendorSignin.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: ParseRoute(window.location.hash)
      });
    });
  }

  // Test hash change
  vendorSignin() {
    // console.log('vendor signin');
    window.location.hash = 'vendor-signin';
  }

  currentPage() {

    // test
    // <Header vendorSignin={this.vendorSignIn} />;

    const { path } = this.state.route;
    if (path === '') {
      return (
        <Home vendorSignin={this.vendorSignin} />
      );
    }
    if (path === 'vendor-signup') {
      return (
        <VendorSignup vendorSignin={this.vendorSignin} />
      );
    }
    if (path === 'vendor-success') {
      return (
        <VendorSuccess vendorSignin={this.vendorSignin} />
      );
    }
    if (path === 'vendor-signin') {
      return (
        <VendorSignin vendorSignin={this.vendorSignin} />
      );
    }
  }

  render() {

    return (
      <div>
        {this.currentPage()}
      </div>
    );
  }
}
