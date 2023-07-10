import React from 'react';

export default class EditListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.listings,
      entryId: Number(this.props.listingClicked),
      currentListing: [],
      roomName: '',
      img: '',
      address: '',
      price: '',
      minPlayers: '',
      difficulty: '',
      timeLimit: '',
      phoneNumber: '',
      description: ''
      // NEW DATA
      // newRoomName: '',
      // newImg: '',
      // newAddress: '',
      // newPrice: '',
      // newMinPlayers: '',
      // newDifficulty: '',
      // newTimeLimit: '',
      // newPhoneNumber: '',
      // newDescription: ''
    };
    this.handleNewName = this.handleNewName.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleMinimumPlayers = this.handleMinimumPlayers.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
    this.handleTimeLimit = this.handleTimeLimit.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleDescription = this.handleDescription.bind(this);

    // this.selectedListing = this.selectedListing.bind(this);
  }

  // selectedListing() {
  //   // console.log('function to select listing');

  //   // const list = this.props.listings;
  //   // const indexClicked = this.props.listingClicked;

  //   // for (let i = 0; i < list.length; i++) {

  //   //   // console.log('index of: ', list.indexOf(list[i].entryId === indexClicked));

  //   //   // TEST ABOVE

  //   //   console.log('looped entryIds: ', list[i].entryId);

  //   //   if (list[i].entryId === indexClicked) {
  //   //     this.setState({
  //   //       listIndex: undefined
  //   //     });
  //   //   }

  //   // }

  //   const indexOfList = this.state.list.findIndex(index => index.entryId === this.state.index);

  //   // console.log('indexOfList: ', indexOfList);

  //   this.setState({
  //     currentListing: [this.state.list[indexOfList]]
  //   });

  //   console.log('CURRENT LISTING ARRAY : ', this.state.currentListing);

  // }

  componentDidMount() {
    // this.selectedListing();

    const indexOfList = this.state.list.findIndex(index => index.entryId === this.state.entryId);

    // console.log('indexOfList: ', indexOfList);

    this.setState({
      currentListing: this.state.list[indexOfList],
      roomName: this.state.list[indexOfList].roomName,
      img: this.state.list[indexOfList].imageUrl,
      address: this.state.list[indexOfList].address,
      price: this.state.list[indexOfList].price,
      minPlayers: this.state.list[indexOfList].minimumPlayers,
      difficulty: this.state.list[indexOfList].difficulty,
      timeLimit: this.state.list[indexOfList].timeLimit,
      phoneNumber: this.state.list[indexOfList].phoneNumber,
      description: this.state.list[indexOfList].description
    });

    // console.log('CURRENT LISTING ARRAY : ', this.state.currentListing);

    // console.log('opened');
    // console.log('listings: ', this.props.listings);
    // console.log('list: ', this.state.list);
    // console.log('index: ', this.state.listIndex);
    // console.log('selected id: ', this.props.listingClicked);
    // console.log('CURRENT LISTING ARRAY : ', this.state.currentListing);
  }

  handleNewName(event) {

    // console.log('event value: ', event.target.value);

    this.setState({
      roomName: event.target.value
    });
  }

  handleImg(event) {
    this.setState({
      img: event.target.value
    });
  }

  handleAddress(event) {
    this.setState({
      address: event.taget.value
    });
  }

  handlePrice(event) {
    this.setState({
      price: event.target.value
    });
  }

  handleMinimumPlayers(event) {
    this.setState({
      minimumPlayers: event.target.value
    });
  }

  handleDifficulty(event) {
    this.setState({
      difficulty: event.target.value
    });
  }

  handleTimeLimit(event) {
    this.setState({
      timeLimit: event.target.value
    });
  }

  handlePhoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  handleDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {

    // console.log('index: ', this.state.listIndex);
    // console.log('CURRENT LISTING ARRAY : ', this.state.currentListing);

    return (
      <div>

        {/* PREVIEW OF ROOM */}
        <div className='container'>
          <div className='col-md'>
            <div className='row justify-content-center py-2' style={{
              color: '#000',
              fontSize: '1.1rem',
              fontWeight: 600
            }}>
              {this.state.roomName}
            </div>
            <div className='row justify-content-center'>
              <img src={this.state.img} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }} />
            </div>

            <div>
              Address: {this.state.address}
            </div>
            <div>
              Price: ${this.state.price}
            </div>
            <div>
              Minimum Players: {this.state.address}
            </div>
            <div>
              Difficulty: {this.state.difficulty}
            </div>
            <div>
              Time limit: {this.state.timeLimit}
            </div>
            <div>
              Phone number: {this.state.phoneNumber}
            </div>
            <div>
              Description: {this.state.description}
            </div>

          </div>
        </div>

        {/* CREATE A NEW COMPONENT TO IMPORT HERE */}
        <div className='d-flex justify-content-center mt-3 mb-3'>
          <form
            autoComplete='off'
            className='new-listing'
          // onSubmit={props.handleSubmit}
          >
            <label className='d-flex justify-content-center mt-3'
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#5A5A5A'
              }}>
              Edit listing
            </label>

            <div>

              <label htmlFor='roomName'>
                <input
                  className='new-listing-input'
                  name='roomName'
                  id='roomName'
                  type='text'
                  placeholder='Room name'
                  value={this.state.roomName}
                  // ********** ERROR HAPPENING HERE **********
                  onChange={this.handleNewName}
                />
              </label>

              <label htmlFor='imageUrl'>
                <input
                  className='new-listing-input'
                  name='imageUrl'
                  id='imageUrl'
                  type='text'
                  placeholder='Image link'
                  value={this.state.img}
                // onChange={props.imageUrlChange}
                />
              </label>

              <label htmlFor='address'>
                <input
                  className='new-listing-input'
                  name='address'
                  id='address'
                  type='text'
                  placeholder='Address'
                  value={this.state.address}
                // onChange={props.addressChange}
                />
              </label>

              <label htmlFor='price'>
                <input
                  className='new-listing-input'
                  name='price'
                  id='price'
                  type='text'
                  placeholder='Price ($ per person)'
                  value={this.state.price}
                  // onChange={props.priceChange}
                  maxLength={3} pattern='[0-9]*'
                />
              </label>

              <label htmlFor='minimumPlayers'>
                <input
                  className='new-listing-input'
                  name='minimumPlayers'
                  id='minimumPlayers'
                  type='text'
                  placeholder='Minimum players'
                  value={this.state.minimumPlayers}
                  // onChange={props.minimumPlayersChange}
                  maxLength={2} />
              </label>

              <label htmlFor='difficulty'>
                <select
                  required
                  className='dropdown'
                  name='difficulty'
                  id='difficulty'
                  value={this.state.difficulty}
                // onClick={props.difficultyChange}
                >
                  <option value=''>Select a difficulty here</option>
                  <option value='Easy'>Easy</option>
                  <option value='Medium'>Medium</option>
                  <option value='Hard'>Hard</option>
                </select>
              </label>

              <label htmlFor='timeLimit'>
                <input
                  className='new-listing-input'
                  name='timeLimit' id='timeLimit'
                  type='text'
                  placeholder='Time limit (minutes)'
                  value={this.state.timeLimit}
                // onChange={props.timeLimitChange}
                />
              </label>

              <label htmlFor='phoneNumber'>
                <input
                  className='new-listing-input'
                  name='phoneNumber'
                  id='phoneNumber'
                  type='text'
                  placeholder='Phone number'
                  value={this.state.phoneNumber}
                  // onChange={props.phoneNumberChange}
                  maxLength={10}
                />
              </label>

              <label htmlFor='description'>
                <textarea
                  className='new-listin-desc'
                  name='description' id='description'
                  placeholder='Description'
                  value={this.state.description}
                // onChange={props.descriptionChange}
                />
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
    );
  }
}
