import React from 'react';
import Header from '../components/header';

class VendorSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordConfirmed: ''
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.verifyUsername = this.verifyUsername.bind(this);
    this.verifyPasswords = this.verifyPasswords.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(event) {
    // console.log('change');

    // console.log('this.state.firstName: ', this.state.firstName.length);

    this.setState({
      firstName: event.target.value
    });
  }

  handleLastName(event) {
    this.setState({
      lastName: event.target.value
    });
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

    // console.log('password: ', this.state.password);

  }

  handlePasswordConfirm(event) {
    this.setState({
      passwordConfirmed: event.target.value
    });

    // console.log('passwordConfirmed: ', this.state.passwordConfirmed);

  }

  verifyUsername(event) {
    if (this.state.username.length >= 3) {
      // console.log('PASSWORDS MATCH');
      return (
        <div style={{ color: '#00FF00', height: '2rem' }}>
          <i className="fa-solid fa-check" style={{ color: '#31c427', fontSize: '1.65rem' }} />
        </div>
      );
    }
    return (
      <div style={{ color: '#ff595e', fontSize: '1rem', height: '2rem' }}>
        <p>
          Username must be at least 3 letters!
        </p>
      </div>
    );
  }

  verifyPasswords(event) {
    if (this.state.passwordConfirmed === this.state.password && this.state.password !== '' && this.state.passwordConfirmed !== '') {
      // console.log('PASSWORDS MATCH');
      return (
        <div style={{ color: '#00FF00', height: '2rem' }}>
          <i className="fa-solid fa-check" style={{ color: '#31c427', fontSize: '1.65rem' }} />
        </div>
      );
    }
    return (
      <div style={{ color: '#ff595e', fontSize: '1rem', height: '2rem' }}>
        <p>
          Make sure passwords match!
        </p>
      </div>
    );
  }

  handleSubmit(event) {
    // event.preventDefault();
    // console.log('SUBMITTED');

    if (this.state.password === this.state.passwordConfirmed &&
      this.state.firstName.length >= 3 &&
      this.state.lastName.length >= 3 &&
      this.state.username.length >= 3 &&
      this.state.password.length >= 3 &&
      this.state.passwordConfirmed.length >= 3 &&
      this.state.firstName !== '' &&
      this.state.lastName !== '' &&
      this.state.username !== '' &&
      this.state.password !== '' &&
      this.state.passwordConfirmed !== '') {

      // console.log('yes');
      event.preventDefault();

      const reqObj = {};
      reqObj.firstName = this.state.firstName;
      reqObj.lastName = this.state.lastName;
      reqObj.username = this.state.username;
      reqObj.password = this.state.passwordConfirmed;

      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqObj)
      };

      fetch('api/vendorAccount', req)
        .then(res => res.json())
        .then(data => {
          // console.log('data: ', data);
          this.setState({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            passwordConfirmed: ''
          });
        });

    } else if ((this.state.password === this.state.passwordConfirmed) &&
      (this.state.firstName.length < 3 ||
      this.state.lastName.length < 3 ||
      this.state.username.length < 3 ||
      this.state.password.length < 3 ||
      this.state.passwordConfirmed.length >= 3 ||
      this.state.firstName === '' ||
      this.state.lastName === '' ||
      this.state.username === '' ||
      this.state.password === '' ||
      this.state.passwordConfirmed === '')) {

      // console.log('no');
      event.preventDefault();
      return false;

      // styles = {
      //   required: {
      //     border: '1px solid'
      //   }
      // };

    } else {

      // console.log('no');
      event.preventDefault();
      return false;

    }
  }

  render() {

    return (
      <>
        <Header />
        <div className='d-flex justify-content-center mt-4 text-center'>
          <p style={{
            fontSize: '1.4rem'
          }}>
            Sign up to add your listing to our catalog!
          </p>
        </div>
        <div className='d-flex justify-content-center mt-1'>
          {/* component for vendor sign up */}
          <form autoComplete='off' className='vsignup-c' onSubmit={this.handleSubmit} >
            <label className='d-flex justify-content-center mt-4'
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#5A5A5A'
            }}>
              Vendor Sign Up
            </label>
            <div className='d-flex justify-content-center'>
              <div className='mt-2'>

                {/* <label htmlFor='firstName' className='row mt-3'>
                  First Name:
                </label>
                <input className='vsignup-input' name='firstName' id='firstName' type='text' value={this.state.firstName} onChange={this.handleFirstName} />

                <label htmlFor='lastName' className='row mt-3'>
                  Last Name:
                </label>
                <input className='vsignup-input' name='lastName' id='lastName' type='text' value={this.state.lastName} onChange={this.handleLastName} />

                <label htmlFor='password' className='row mt-3'>
                  Password:
                </label>
                <input className='vsignup-input' name='password' id='password' type='text' value={this.state.password} onChange={this.handlePassword} />

                <label htmlFor='passwordConfirm' className='row mt-3'>
                  Re-enter Password (must match):
                </label>
                <input className='vsignup-input' name='passwordConfirm' id='passwordConfirm' type='text' value={this.state.passwordConfirmed} onChange={this.handlePasswordConfirm} /> */}

                <label htmlFor='firstName' className='row mt-3'>
                  {/* First Name: */}
                  <input className='vsignup-input' name='firstName' id='firstName' type='text' placeholder='First Name' value={this.state.firstName} onChange={this.handleFirstName} />
                </label>

                <label htmlFor='lastName' className='row mt-3'>
                  {/* Last Name: */}
                  <input className='vsignup-input' name='lastName' id='lastName' type='text' placeholder='Last Name' value={this.state.lastName} onChange={this.handleLastName} />
                </label>

                <label htmlFor='username' className='row mt-3'>
                  {/* Password: */}
                  <input className='vsignup-input' name='username' id='username' type='text' placeholder='Username' value={this.state.username} onChange={this.handleUsername} />
                </label>

                <label htmlFor='password' className='row mt-3'>
                  {/* Password: */}
                  <input className='vsignup-input' name='password' id='password' type='password' placeholder='Password' value={this.state.password} onChange={this.handlePassword} />
                </label>

                <label htmlFor='passwordConfirm' className='row mt-3'>
                  {/* Re-enter Password (must match): */}
                  <input className='vsignup-input' name='passwordConfirm' id='passwordConfirm' type='password' placeholder='Re-enter Password' value={this.state.passwordConfirmed} onChange={this.handlePasswordConfirm} />
                </label>

                {/* conditionally render button when passwords match */}
                <div className='text-center mt-3'>
                  {this.verifyUsername()}
                  {this.verifyPasswords()}
                </div>

                {/* button */}
                <div className='text-center mt-3'>
                  <button className='register'>Register</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default VendorSignup;
