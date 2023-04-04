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
  }

  homePage() {
    window.location.hash = '#';
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
    // console.log('Submitted!');
    // event.preventDefault();

    if (this.state.username === '' &&
      this.state.password === '' &&
      this.state.username < 3 &&
      this.state.password < 3) {

      // console.log('Invalid inputs');
      event.preventDefault();
      return false;

    } else {

      // console.log('Submitted');

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

      fetch('api/vendorAccount/signin', req)
        .then(res => res.json())
        .then(data => {
          this.setState({
            username: '',
            password: ''
          });

          // Hash route here

        });

    }

  }

  render() {
    return (
      <>
        <Header />
        {/* <div className='text-center'>
          Sign in
        </div> */}

        <div className='d-flex justify-content-center mt-4 text-center'>
          <p style={{
            fontSize: '1.4rem'
          }}>
            Welcome back!
          </p>
        </div>
        <div className='d-flex justify-content-center mt-1'>
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
              <div className='mt-4'>

                <label htmlFor='username' className='row mt-3'>
                  <input className='vsignin-input' name='username' id='username' type='text' placeholder='Username' value={this.state.username} onChange={this.handleUsername}/>
                </label>

                <label htmlFor='password' className='row mt-3'>
                  <input className='vsignin-input' name='password' id='password' type='password' placeholder='Password' value={this.state.password} onChange={this.handlePassword}/>
                </label>

                <div className='text-center mt-5'>
                  <button className='register' style={{ cursor: 'pointer' }} >Sign In</button>
                </div>

              </div>
            </div>
          </form>
        </div>
        <div className='d-flex justify-content-center mt-5 mb-3'>
          <a style={{
            cursor: 'pointer'
          }} onClick={this.homePage}>Back to home page</a>
        </div>

      </>
    );
  }

}

// export default function VendorSignin(props) {
//   return (
//     <>
//       <Header vendorSignin={props.vendorSignin} />
//       {/* <div className='text-center'>
//         SIGN IN PAGE
//       </div> */}

//       {/* CREATING MOCK UP */}
//       <div className='d-flex justify-content-center mt-4 text-center'>
//         <p style={{
//           fontSize: '1.4rem'
//         }}>
//           Sign up to add your listing to our catalog!
//         </p>
//       </div>
//       <div className='d-flex justify-content-center mt-1'>
//         <form autoComplete='off' className='vsignup-c' onSubmit={this.handleSubmit} >
//           <label className='d-flex justify-content-center mt-4'
//             style={{
//               fontSize: '1.25rem',
//               fontWeight: 600,
//               color: '#5A5A5A'
//             }}>
//             Vendor Sign Up
//           </label>
//           <div className='d-flex justify-content-center'>
//             <div className='mt-2'>

//               <label htmlFor='firstName' className='row mt-3'>
//                 <input className='vsignup-input' name='firstName' id='firstName' type='text' placeholder='First Name' value={this.state.firstName} onChange={this.handleFirstName} />
//               </label>

//               <label htmlFor='lastName' className='row mt-3'>
//                 <input className='vsignup-input' name='lastName' id='lastName' type='text' placeholder='Last Name' value={this.state.lastName} onChange={this.handleLastName} />
//               </label>

//               <label htmlFor='username' className='row mt-3'>
//                 <input className='vsignup-input' name='username' id='username' type='text' placeholder='Username' value={this.state.username} onChange={this.handleUsername} />
//               </label>

//               <label htmlFor='password' className='row mt-3'>
//                 <input className='vsignup-input' name='password' id='password' type='password' placeholder='Password' value={this.state.password} onChange={this.handlePassword} />
//               </label>

//               <label htmlFor='passwordConfirm' className='row mt-3'>
//                 <input className='vsignup-input' name='passwordConfirm' id='passwordConfirm' type='password' placeholder='Re-enter Password' value={this.state.passwordConfirmed} onChange={this.handlePasswordConfirm} />
//               </label>

//               <div className='text-center mt-3'>
//                 {this.verifyUsername()}
//                 {this.verifyPasswords()}
//               </div>

//               <div className='text-center mt-3'>
//                 <button className='register' style={{ cursor: 'pointer' }}>Register</button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className='d-flex justify-content-center mt-5 mb-3'>
//         <a style={{
//           cursor: 'pointer'
//         }} onClick={this.homePage} >Back to home page</a>
//       </div>

//     </>
//   );
// }
