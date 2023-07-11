import React from 'react';
import EditForm from './edit-form';

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
      description: '',
      // TEST PASSING ORIGINAL DATA
      originalRoomName: '',
      originalImg: '',
      originalAddress: '',
      originalPrice: '',
      originalMinimumPlayers: '',
      originalDifficulty: '',
      originalTimeLimit: '',
      originalPhoneNumber: '',
      originalDescription: ''
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
    // this.handleSubmit = this.handleSubmit.bind(this);

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
      minimumPlayers: this.state.list[indexOfList].minimumPlayers,
      difficulty: this.state.list[indexOfList].difficulty,
      timeLimit: this.state.list[indexOfList].timeLimit,
      phoneNumber: this.state.list[indexOfList].phoneNumber,
      description: this.state.list[indexOfList].description,
      // PASSING ORIGINAL STATES TO COMPARE WITH UPDATED DATA
      originalRoomName: this.state.list[indexOfList].roomName,
      originalImg: this.state.list[indexOfList].imageUrl,
      originalAddress: this.state.list[indexOfList].address,
      originalPrice: this.state.list[indexOfList].price,
      originalMinimumPlayers: this.state.list[indexOfList].minimumPlayers,
      originalDifficulty: this.state.list[indexOfList].difficulty,
      originalTimeLimit: this.state.list[indexOfList].timeLimit,
      originalPhoneNumber: this.state.list[indexOfList].phoneNumber,
      originalDescription: this.state.list[indexOfList].description
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
      address: event.target.value
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

  // handleSubmit(event) {
  //   event.preventDefault();

  //   // console.log('submitted!');
  // }

  render() {
    // console.log('difficulty: ', this.state.difficulty);

    // console.log('index: ', this.state.listIndex);
    // console.log('CURRENT LISTING ARRAY : ', this.state.currentListing);

    return (
      <div>

        {/* PREVIEW OF ROOM */}
        <div className='container room-d' >
          <div className='col-md py-3'>
            <div className='row justify-content-center' style={{
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
              <div className='py-1'>
                <b>Address</b>: {this.state.address}
              </div>
              <div className='py-1'>
                <b>Price</b>: ${this.state.price}
              </div>
              <div className='py-1'>
                <b>Minimum Players</b>: {this.state.address}
              </div>
              <div className='py-1'>
                <b>Difficulty</b>: {this.state.difficulty}
              </div>
              <div className='py-1'>
                <b>Time limit</b>: {this.state.timeLimit}
              </div>
              <div className='py-1'>
                <b>Phone number</b>: {this.state.phoneNumber}
              </div>
              <div className='py-1'>
                <b>Description</b>: {this.state.description}
              </div>

            </div>

          </div>
        </div>

        {/* CREATE A NEW COMPONENT TO IMPORT HERE */}
        <EditForm
          closeEdit={this.props.closeEdit}
          ogRoomName={this.state.originalRoomName}
          ogImg={this.state.originalImg}
          ogAddress={this.state.originalAddress}
          ogPrice={this.state.originalPrice}
          ogMinimumPlayers={this.state.originalMinimumPlayers}
          ogDifficulty={this.state.originalDifficulty}
          ogTimeLimit={this.state.originalTimeLimit}
          ogPhoneNumber={this.state.originalPhoneNumber}
          ogDescription={this.state.originalDescription}
          roomName={this.state.roomName}
          img={this.state.img}
          address={this.state.address}
          price={this.state.price}
          minimumPlayers={this.state.minimumPlayers}
          difficulty={this.state.difficulty}
          timeLimit={this.state.timeLimit}
          phoneNumber={this.state.phoneNumber}
          description={this.state.description}
          handleNewName={this.handleNewName}
          handleImg={this.handleImg}
          handleAddress={this.handleAddress}
          handlePrice={this.handlePrice}
          handleMinimumPlayers={this.handleMinimumPlayers}
          handleDifficulty={this.handleDifficulty}
          handleTimeLimit={this.handleTimeLimit}
          handlePhoneNumber={this.handlePhoneNumber}
          handleDescription={this.handleDescription}
          // handleSubmit={this.handleSubmit}
        />
        {/* <div className='d-flex justify-content-center mt-3 mb-3'>
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
                  placeholder={this.state.roomName}
                  // value={this.state.roomName}
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
                  placeholder={this.state.img}
                  // value={this.state.img}
                  onChange={this.handleImg}
                />
              </label>

              <label htmlFor='address'>
                <input
                  className='new-listing-input'
                  name='address'
                  id='address'
                  type='text'
                  placeholder={this.state.address}
                  // value={this.state.address}
                  onChange={this.handleAddress}
                />
              </label>

              <label htmlFor='price'>
                <input
                  className='new-listing-input'
                  name='price'
                  id='price'
                  type='text'
                  placeholder={this.state.price}
                  // value={this.state.price}
                  onChange={this.handlePrice}
                  maxLength={3} pattern='[0-9]*'
                />
              </label>

              <label htmlFor='minimumPlayers'>
                <input
                  className='new-listing-input'
                  name='minimumPlayers'
                  id='minimumPlayers'
                  type='text'
                  placeholder={this.state.minimumPlayers}
                  // value={this.state.minimumPlayers}
                  onChange={this.handleMinimumPlayers}
                  maxLength={2} />
              </label>

              <label htmlFor='difficulty'>
                <select
                  required
                  className='dropdown'
                  name='difficulty'
                  id='difficulty'
                  // placeholder={this.state.difficulty}
                  onClick={this.handleDifficulty}
                >
                  <option value=''>{this.state.difficulty}</option>
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
                  placeholder={this.state.timeLimit}
                  // value={this.state.timeLimit}
                  onChange={this.handleTimeLimit}
                />
              </label>

              <label htmlFor='phoneNumber'>
                <input
                  className='new-listing-input'
                  name='phoneNumber'
                  id='phoneNumber'
                  type='text'
                  placeholder={this.state.phoneNumber}
                  // value={this.state.phoneNumber}
                  onChange={this.handlePhoneNumber}
                  maxLength={10}
                />
              </label>

              <label htmlFor='description'>
                <textarea
                  className='new-listin-desc'
                  name='description' id='description'
                  placeholder={this.state.description}
                  // value={this.state.description}
                  onChange={this.handleDescription}
                />
              </label>

              <div className='mb-4'>
                <button className='new-listing-submit' type='submit' style={{
                  cursor: 'pointer'
                }}>Submit</button>
              </div>

            </div>

          </form>
        </div> */}
      </div>
    );
  }
}
