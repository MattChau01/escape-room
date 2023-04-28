import React from 'react';
import Home from './pages/home';
import jwtDecode from 'jwt-decode';
import ParseRoute from './lib/parse-route';
import CatalogPage from './pages/catalog';
import VendorSignup from './pages/vendor-signup';
import VendorSuccess from './pages/vendor-success';
import VendorSignin from './pages/vendor-signin';
import VendorHome from './pages/vendor-home';
import TokenRequired from './pages/token-required';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash),
      user: null,
      isAuthorizing: true
    };
    this.currentPage = this.currentPage.bind(this);
    this.routeVSignin = this.routeVSignin.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.toHome = this.toHome.bind(this);
    this.routeVSignup = this.routeVSignup.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: ParseRoute(window.location.hash)
      });
    });

    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({
      user,
      isAuthorizing: false
    });

  }

  toHome() {
    window.location.hash = '#';
  }

  routeVSignup() {
    window.location.hash = 'vendor-signup';
  }

  routeVSignin() {
    window.location.hash = 'vendor-signin';
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    window.localStorage.removeItem('userId');
    this.setState({
      user: null
    });
    window.location.hash = 'vendor-signin';
  }

  currentPage() {
    // participants

    const { path } = this.state.route;
    if (path === '') {
      return (
        <Home routeVSignin={this.routeVSignin} toHome={this.toHome} />
      );
    }

    if (path === 'participants') {
      return (
        <CatalogPage routeVSignin={this.routeVSignin} toHome={this.toHome} />
      );
    }

    if (path === 'vendor-signup') {
      return (
        <VendorSignup routeVSignin={this.routeVSignin} toHome={this.toHome}/>
      );
    }

    if (path === 'vendor-success') {
      return (
        <VendorSuccess routeVSignin={this.routeVSignin} toHome={this.toHome} />
      );
    }

    if (path === 'vendor-signin') {
      return (
        <VendorSignin routeVSignin={this.routeVSignin} onSignIn={this.handleSignIn} toHome={this.toHome} />
      );
    }

    if (path === 'vendor-home' && (window.localStorage.getItem('react-context-jwt') !== null)) {

      return (
        <VendorHome routeVSignin={this.routeVSignin} isAuthorizing={this.state.isAuthorizing} handleSignOut={this.handleSignOut} user={this.state.user} toHome={this.toHome} />
      );
    } else if (path === 'vendor-home' && (window.localStorage.getItem('react-context-jwt') === null)) {
      return (
        <TokenRequired routeVSignin={this.routeVSignin} toHome={this.toHome} routeVSignup={this.routeVSignup} />
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
