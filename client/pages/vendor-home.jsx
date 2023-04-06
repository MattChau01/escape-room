import React from 'react';
import Header from '../components/header';

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isclicked: false
    };
  }

  render() {

    // console.log('vendor home page');
    // console.log('value of isAuthorizing: ', this.props.isAuthorizing);

    return (
      <>
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
            }}>Sign out</button>
          </div>
          <div className='text-center mt-5'>
            LOGIN SUCCESSFUL!
          </div>

        </div>
      </>
    );
  }

}
