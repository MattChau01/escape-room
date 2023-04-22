import React from 'react';
import Header from '../components/header';

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOutClicked: false
    };
  }

  render() {

    return (
      <>
        <Header routeVSignin={this.props.routeVSignin} toHome={this.props.toHome} />
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
          <div className='text-center mt-3'>
            {/* HOME PAGE WILL RENDER A MESSAGE WHETHER THE CURRENT USER ALREADY MADE A LISTING OR NOT */}

            <div className='d-flex justify-content-center text-center'>
              <p style={{
                fontSize: '1.4rem'
              }}>
                Create a new listing here:
              </p>
            </div>

            <div>
              <div className='d-flex justify-content-center mt-4 mb-4'>
                <form autoComplete='off' className='new-listing'>
                  <label className='d-flex justify-content-center mt-5'
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#5A5A5A'
                    }}>
                    New listing
                  </label>

                  <div>

                    {/* WORKING ON FORM */}

                    <label>
                      <input type='text' />
                    </label>

                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }

}
