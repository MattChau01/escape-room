import React from 'react';
import Header from '../components/header';

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOutClicked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // console.log('submitted!');
    event.preventDefault();
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
              <div className='d-flex justify-content-center mt-3 mb-3'>
                <form autoComplete='off' className='new-listing' onSubmit={this.handleSubmit}>
                  <label className='d-flex justify-content-center mt-3'
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#5A5A5A'
                    }}>
                    New listing
                  </label>

                  <div>

                    {/* WORKING ON FORM */}

                    <label htmlFor='roomName'>
                      <input className='new-listing-input' name='roomName' id='roomName' type='text' placeholder='Room name' />
                    </label>

                    <label htmlFor='imageUrl'>
                      <input className='new-listing-input' name='imageUrl' id='imageUrl' type='text' placeholder='Image link' />
                    </label>

                    <label htmlFor='address'>
                      <input className='new-listing-input' name='address' id='address' type='text' placeholder='Address' />
                    </label>

                    <label htmlFor='price'>
                      <input className='new-listing-input' name='price' id='price' type='text' placeholder='Price' />
                    </label>

                    <label htmlFor='minimumPlayers'>
                      <input className='new-listing-input' name='minimumPlayers' id='minimumPlayers' type='text' placeholder='Minimum players' />
                    </label>

                    <label htmlFor='difficulty'>
                      <input className='new-listing-input' name='difficulty' id='difficulty' type='text' placeholder='Difficulty' />
                    </label>

                    <label htmlFor='timeLimit'>
                      <input className='new-listing-input' name='timeLimit' id='timeLimit' type='text' placeholder='Time limit' />
                    </label>

                    <label htmlFor='description'>
                      {/* <input className='' name='description' id='description' type='textArea' placeholder='Description' /> */}
                      <textarea className='new-listin-desc' name='description' id='description' placeholder='Description' />
                    </label>

                    <div className='mb-4'>
                      <button className='new-listing-submit' >Submit</button>
                    </div>

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
