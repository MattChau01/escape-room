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
import RoomDetails from './pages/room-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash),
      user: null,
      isAuthorizing: true,
      listings: [],
      roomId: null
    };
    this.currentPage = this.currentPage.bind(this);
    this.routeVSignin = this.routeVSignin.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.toHome = this.toHome.bind(this);
    this.participants = this.participants.bind(this);
    this.routeVSignup = this.routeVSignup.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: ParseRoute(window.location.hash)
      });
    });

    const token = window.localStorage.getItem('Token');
    const user = token ? jwtDecode(token) : null;
    this.setState({
      user,
      isAuthorizing: false
    });

    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('/api/listings/catalog', req)
      .then(res => res.json())
      .then(listings => {
        this.setState({
          listings
        });
      })
      .catch(err => console.error(err));

  }

  toHome() {
    window.location.hash = '#';
  }

  participants() {
    window.location.hash = 'participants';
  }

  routeVSignup() {
    window.location.hash = 'vendor-signup';
  }

  routeVSignin() {
    window.location.hash = 'vendor-signin';
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('Token', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('Token');
    window.localStorage.removeItem('userId');
    this.setState({
      user: null
    });
    window.location.hash = 'vendor-signin';
  }

  currentPage() {

    const { path } = this.state.route;
    if (path === '') {
      return (
        <Home routeVSignup={this.routeVSignup} participants={this.participants} routeVSignin={this.routeVSignin} toHome={this.toHome} />
      );
    }

    if (path === 'participants') {

      return (
        <CatalogPage participants={this.participants} routeVSignin={this.routeVSignin} toHome={this.toHome} listings={this.state.listings} />
      );
    }

    if (path === 'catalog') {

      return (
        <RoomDetails participants={this.participants} routeVSignin={this.routeVSignin} toHome={this.toHome} listings={this.state.listings} />

      );
    }

    if (path === 'vendor-signup') {
      return (
        <VendorSignup participants={this.participants} routeVSignin={this.routeVSignin} toHome={this.toHome} />
      );
    }

    if (path === 'vendor-success') {
      return (
        <VendorSuccess participants={this.participants} routeVSignin={this.routeVSignin} toHome={this.toHome} />
      );
    }

    if (path === 'vendor-signin' && (window.localStorage.getItem('Token') !== null)) {
      window.location.hash = 'vendor-home';
    } else if (path === 'vendor-signin' && (window.localStorage.getItem('Token') === null)) {
      return (
        <VendorSignin onSignIn={this.handleSignIn} participants={this.participants} routeVSignin={this.routeVSignin} toHome={this.toHome} />
      );
    }

    if (path === 'vendor-home' && (window.localStorage.getItem('Token') !== null)) {

      return (
        <VendorHome isAuthorizing={this.state.isAuthorizing} handleSignOut={this.handleSignOut} user={this.state.user} participants={this.participants} routeVSignin={this.routeVSignin} toHome={this.toHome} />
      );
    } else if (path === 'vendor-home' && (window.localStorage.getItem('Token') === null)) {
      return (
        <TokenRequired participants={this.participants} routeVSignin={this.routeVSignin} toHome={this.toHome} routeVSignup={this.routeVSignup} />
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
