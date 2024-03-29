import React from 'react';
import Header from '../components/header';

export default class VendorSignin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.homePage = this.homePage.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  homePage() {
    window.location.hash = '#';
  }

  newUser() {
    window.location.hash = 'vendor-signup';
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {

    if (this.state.username === '' &&
      this.state.password === '' &&
      this.state.username < 3 &&
      this.state.password < 3) {

      event.preventDefault();
      return false;

    } else {

      event.preventDefault();

      const reqObj = {};
      reqObj.username = this.state.username;
      reqObj.password = this.state.password;

      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqObj)
      };

      fetch('api/vendorAccounts/signin', req)
        .then(res => res.json())
        .then(result => {

          if (result.user && result.token) {

            window.localStorage.setItem('userId', result.user.userId);
            window.localStorage.setItem('username', result.user.username);

            this.props.onSignIn(result);
            this.setState({
              username: '',
              password: ''
            });
            window.location.hash = 'vendor-home';

          } else {

            return false;

          }

        })
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <>
        <Header
          participants={this.props.participants}
          routeVSignin={this.props.routeVSignin}
          toHome={this.props.toHome}
          aboutUs={this.props.aboutUs} />
        <div className='d-flex justify-content-center mt-4 text-center'>
          <h4>
            Welcome back!
          </h4>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <form autoComplete='off' className='vsignin-c' onSubmit={this.handleSubmit}>
            <label className='d-flex justify-content-center mt-5'
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#5A5A5A'
              }}>
              Vendor Sign in
            </label>
            <div className='d-flex justify-content-center'>
              <div className='mt-3'>

                <label htmlFor='username' className='row mt-3'>
                  <input
                    className='vsignin-input'
                    name='username'
                    id='username'
                    type='text'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleUsername}/>
                </label>

                <label htmlFor='password' className='row mt-3'>
                  <input
                    className='vsignin-input'
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handlePassword}/>
                </label>

                <div className='text-center mt-5'>
                  <button className='register' style={{ cursor: 'pointer' }} >Sign In</button>
                </div>

              </div>
            </div>
          </form>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <div>Don&apos;t have an account yet? <a style={{ cursor: 'pointer' }} onClick={this.newUser}> Click here</a></div>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <a style={{
            cursor: 'pointer'
          }} onClick={this.homePage}>Back to home page</a>
        </div>

      </>
    );
  }
}
