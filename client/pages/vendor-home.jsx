import React from 'react';
import Header from '../components/header';

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOutClicked: false,
      roomName: '',
      imageUrl: '',
      address: '',
      price: '',
      minimumPlayers: '',
      difficulty: '',
      timeLimit: '',
      description: ''
    };
    this.roomName = this.roomName.bind(this);
    this.imageLink = this.imageLink.bind(this);
    this.address = this.address.bind(this);
    this.price = this.price.bind(this);
    this.minimumPlayers = this.minimumPlayers.bind(this);
    this.difficulty = this.difficulty.bind(this);
    this.timeLimit = this.timeLimit.bind(this);
    this.description = this.description.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  roomName(event) {
    // console.log('roomName: ', this.state.roomName);

    this.setState({
      roomName: event.target.value
    });
  }

  imageLink(event) {
    this.setState({
      imageUrl: event.target.value
    });
  }

  address(event) {
    this.setState({
      address: event.target.value
    });
  }

  price(event) {
    this.setState({
      price: event.target.value
    });
  }

  minimumPlayers(event) {
    this.setState({
      minimumPlayers: event.target.value
    });
  }

  difficulty(event) {
    this.setState({
      difficulty: event.target.value
    });
  }

  timeLimit(event) {
    this.setState({
      timeLimit: event.target.value
    });
  }

  description(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(event) {
    // console.log('submitted!');
    // event.preventDefault();

    if (this.state.roomName === '' || this.state.imageUrl === '' || this.state.address === '' || this.state.price === '' || this.state.minimumPlayers === '' || this.state.difficulty === '' || this.state.timeLimit === '' || this.state.description === '') {
      event.preventDefault();
      // console.log('invalid inputs');
      return false;
    } else {

      event.preventDefault();

      // console.log('submitted');

      const reqObj = {};

      // TEST
      // reqObj.userId = 1;
      reqObj.userId = window.localStorage.getItem('userId');
      reqObj.roomName = this.state.roomName;
      reqObj.imageUrl = this.state.imageUrl;
      reqObj.address = this.state.address;
      reqObj.price = this.state.price;
      reqObj.minimumPlayers = this.state.minimumPlayers;
      reqObj.difficulty = this.state.difficulty;
      reqObj.timeLimit = this.state.timeLimit;
      reqObj.description = this.state.description;

      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': window.localStorage.getItem('react-context-jwt')
        },
        body: JSON.stringify(reqObj)
      };

      fetch('/api/listings', req)
        .then(res => res.json())
        .then(result => {
          // console.log('result: ', result);
          // console.log('result.user: ', result.user);
          // console.log('result.token: ', result.token);

          console.log('new listing add successfully!'); //eslint-disable-line

        })
        .catch(err => console.error(err));

    }

  }

  render() {
    // console.log('user: ', window.localStorage.getItem('UserId'));
    // console.log('userId: ', this.props.userId);

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
                      <input className='new-listing-input' name='roomName' id='roomName' type='text' placeholder='Room name' value={this.state.roomName} onChange={this.roomName} />
                    </label>

                    <label htmlFor='imageUrl'>
                      <input className='new-listing-input' name='imageUrl' id='imageUrl' type='text' placeholder='Image link' value={this.state.imageUrl} onChange={this.imageLink}/>
                    </label>

                    <label htmlFor='address'>
                      <input className='new-listing-input' name='address' id='address' type='text' placeholder='Address' value={this.state.address} onChange={this.address} />
                    </label>

                    <label htmlFor='price'>
                      <input className='new-listing-input' name='price' id='price' type='text' placeholder='Price' value={this.state.price} onChange={this.price} />
                    </label>

                    <label htmlFor='minimumPlayers'>
                      <input className='new-listing-input' name='minimumPlayers' id='minimumPlayers' type='text' placeholder='Minimum players' value={this.state.minimumPlayers} onChange={this.minimumPlayers} />
                    </label>

                    <label htmlFor='difficulty'>
                      <input className='new-listing-input' name='difficulty' id='difficulty' type='text' placeholder='Difficulty' value={this.state.difficulty} onChange={this.difficulty}/>
                    </label>

                    <label htmlFor='timeLimit'>
                      <input className='new-listing-input' name='timeLimit' id='timeLimit' type='text' placeholder='Time limit' value={this.state.timeLimit} onChange={this.timeLimit}/>
                    </label>

                    <label htmlFor='description'>
                      {/* <input className='' name='description' id='description' type='textArea' placeholder='Description' /> */}
                      <textarea className='new-listin-desc' name='description' id='description' placeholder='Description' value={this.state.description} onChange={this.description}/>
                    </label>

                    <div className='mb-4'>
                      <button className='new-listing-submit' type='submit' style={{
                        cursor: 'pointer'
                      }}>Submit</button>
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
