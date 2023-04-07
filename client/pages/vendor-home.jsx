import React from 'react';
import Header from '../components/header';
// import VendorSignOutModal from '../components/vendor-signout';

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOutClicked: false
    };
  }

  render() {

    // console.log('vendor home page');
    // console.log('(vendor-home) isAuthorizing: ', this.props.isAuthorizing);

    return (
      <>
        {/* <VendorSignOutModal /> */}
        <Header routeVSignin={this.props.routeVSignin}/>
        <div className='mt-5'>
          <div className='text-right mr-5 v-signout'>
            <button style={{
              backgroundColor: '#1976D2',
              color: '#fff',
              borderRadius: '5rem',
              width: '7rem',
              textAlign: 'center',
              paddingTop: '.25rem',
              cursor: 'pointer',
              outline: 'none',
              borderStyle: 'none'
            }} onClick={this.props.handleSignOut}>Sign out</button>
          </div>
          <div className='text-center mt-5'>
            LOGIN SUCCESSFUL!
          </div>
        </div>
      </>
    );
  }

}
