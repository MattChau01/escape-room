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
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
  }

  handleFirstName(event) {
    // console.log('change');
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

  verifyPasswords(event) {
    if (this.state.passwordConfirmed === this.state.password && this.state.password !== '' && this.state.passwordConfirmed !== '') {
      // console.log('PASSWORDS MATCH');
      return (
        <div style={{ color: 'green' }}>
          <i className="fa-solid fa-check" style={{ color: '#31c427', fontSize: '1.8rem' }} />
        </div>
      );
    }
    return (
      <div style={{ color: 'red' }}>
        Make sure passwords match!
      </div>
    );
  }

  render() {
    return (
      <>
        <Header />
        <div className='d-flex justify-content-center mt-3 text-center'>
          <p style={{
            fontSize: '1.4rem'
          }}>
            Sign up to add your listing to our catalog!
          </p>
        </div>
        <div className='d-flex justify-content-center mt-1'>
          {/* component for vendor sign up */}
          <form autoComplete='off' className='vsignup-c'>
            <label className='d-flex justify-content-center mt-5'
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#5A5A5A'
            }}>
              Vendor Sign Up
            </label>
            <div className='d-flex justify-content-center'>
              <div className='mt-3'>

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

                <label htmlFor='firstName' className='row mt-4'>
                  {/* First Name: */}
                  <input className='vsignup-input' name='firstName' id='firstName' type='text' placeholder='First Name' value={this.state.firstName} onChange={this.handleFirstName} />
                </label>

                <label htmlFor='lastName' className='row mt-4'>
                  {/* Last Name: */}
                  <input className='vsignup-input' name='lastName' id='lastName' type='text' placeholder='Last Name' value={this.state.lastName} onChange={this.handleLastName} />
                </label>

                <label htmlFor='username' className='row mt-4'>
                  {/* Password: */}
                  <input className='vsignup-input' name='username' id='username' type='text' placeholder='Username' value={this.state.username} onChange={this.handleUsername} />
                </label>

                <label htmlFor='password' className='row mt-4'>
                  {/* Password: */}
                  <input className='vsignup-input' name='password' id='password' type='password' placeholder='Password' value={this.state.password} onChange={this.handlePassword} />
                </label>

                <label htmlFor='passwordConfirm' className='row mt-4'>
                  {/* Re-enter Password (must match): */}
                  <input className='vsignup-input' name='passwordConfirm' id='passwordConfirm' type='password' placeholder='Re-enter Password' value={this.state.passwordConfirmed} onChange={this.handlePasswordConfirm} />
                </label>

                {/* conditionally render button when passwords match */}
                <div className='text-center mt-3'>
                  {
                    this.verifyPasswords()
                  }
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
