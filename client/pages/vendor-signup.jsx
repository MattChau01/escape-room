import React from 'react';
import Header from '../components/header';

class VendorSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      passwordConfirmed: ''
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
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

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handlePasswordConfirm(event) {
    this.setState({
      passwordConfirmed: event.target.value
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className='d-flex justify-content-center mt-3 text-center'>
          <p style={{
            fontSize: '1.5rem'
          }}>
            Sign up to add your listing to our catalog!
          </p>
        </div>
        <div className='d-flex justify-content-center mt-1'>
          {/* component for vendor sign up */}
          <form autoComplete='off' className='vsignup'>
            <label className='d-flex justify-content-center mt-3'
            style={{
              fontSize: '1.25rem'
            }} >
              Vendor Sign Up
            </label>
            <label htmlFor='firstName'>
              First Name:
              <input name='firstName' type='text' value={this.state.firstName} onChange={this.handleFirstName} className='mx-2'/>
            </label>
            <label htmlFor='lastName'>
              Last Name:
              <input name='lastName' type='text' value={this.state.lastName} onChange={this.handleLastName} className='mx-2' />
            </label>
            <label htmlFor='password'>
              Password:
              <input name='password' type='text' value={this.state.password} onChange={this.handlePassword} className='mx-2' />
            </label>
            <label htmlFor='passwordConfirm'>
              Confirm Password:
              <input name='passwordConfirm' type='text' value={this.state.passwordConfirmed} onChange={this.handlePasswordConfirm} className='mx-2' />
            </label>
          </form>
        </div>
      </>
    );
  }
}

export default VendorSignup;
