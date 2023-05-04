import React from 'react';
import Header from '../components/header';
import ListingForm from '../components/new-listing-form'; //eslint-disable-line

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: '',
      imageUrl: '',
      address: '',
      price: '',
      minimumPlayers: '',
      difficulty: '',
      timeLimit: '',
      phoneNumber: '',
      description: '',
      newListingButton: false
    };
    this.roomName = this.roomName.bind(this);
    this.imageLink = this.imageLink.bind(this);
    this.address = this.address.bind(this);
    this.price = this.price.bind(this);
    this.minimumPlayers = this.minimumPlayers.bind(this);
    this.difficulty = this.difficulty.bind(this);
    this.timeLimit = this.timeLimit.bind(this);
    this.phoneNumber = this.phoneNumber.bind(this);
    this.description = this.description.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('component did mount'); //eslint-disable-line

    if (window.localStorage.getItem('react-context-jwt') !== null) {
      console.log('User logged in!'); //eslint-disable-line
    } else {
      console.log('Token required!'); //eslint-disable-line
    }
  }

  roomName(event) {

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

  phoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  description(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(event) {

    if (this.state.roomName === '' || this.state.imageUrl === '' || this.state.address === '' || this.state.price === '' || this.state.minimumPlayers === '' || this.state.difficulty === '' || this.state.timeLimit === '' || this.state.description === '') {
      event.preventDefault();
      return false;
    } else {

      event.preventDefault();

      const reqObj = {};

      reqObj.userId = window.localStorage.getItem('userId');
      reqObj.roomName = this.state.roomName;
      reqObj.imageUrl = this.state.imageUrl;
      reqObj.address = this.state.address;
      reqObj.price = this.state.price;
      reqObj.minimumPlayers = this.state.minimumPlayers;
      reqObj.difficulty = this.state.difficulty;
      reqObj.timeLimit = this.state.timeLimit;
      reqObj.phoneNumber = this.state.phoneNumber;
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

          this.setState({
            roomName: '',
            imageUrl: '',
            address: '',
            price: '',
            minimumPlayers: '',
            difficulty: '',
            timeLimit: '',
            phoneNumber: '',
            description: ''
          });

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
          toHome={this.props.toHome} />
        {/* <div>
          VENDOR HOME SCREEN HERE
        </div> */}
        <div className='text-right mt-5 mr-5 v-signout'>
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
          }} onClick={this.handleSignOut}>Sign out</button>
        </div>
        <div className='text-center'>
          {/* CURRENT USERS LISTINGS WILL RENDER HERE (IF ANY) */}
          VENDOR HOME
        </div>
        <div className='d-flex justify-content-center mt-3 add-listing'>
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
          }}>
            {/* ADD ONCHANGE EVENT HERE */}
            Add a listing
          </button>
        </div>
        {/* <ListingForm
          handleSubmit={this.handleSubmit}
          roomName={this.state.roomName}
          roomNameChange={this.roomName}
          imageUrl={this.state.imageUrl}
          imageUrlChange={this.imageLink}
          address={this.state.address}
          addressChange={this.address}
          price={this.state.price}
          priceChange={this.price}
          minimumPlayers={this.state.minimumPlayers}
          minimumPlayersChange={this.minimumPlayers}
          difficulty={this.state.difficulty}
          difficultyChange={this.difficulty}
          timeLimit={this.state.timeLimit}
          timeLimitChange={this.timeLimit}
          phoneNumber={this.state.phoneNumber}
          phoneNumberChange={this.phoneNumber}
          description={this.state.description}
          descriptionChange={this.description}/> */}
      </>
    );
  }

}
