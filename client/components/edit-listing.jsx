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
      // ORIGINAL VALUES
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
  }

  componentDidMount() {

    const indexOfList = this.state.list.findIndex(index => index.entryId === this.state.entryId);

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
      // ORIGINAL DATA
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

  }

  handleNewName(event) {

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

  render() {

    return (
      <div>

        <div className='container room-d' >
          <div className='col-md py-3'>
            <div className='row justify-content-center pt-2' style={{
              color: '#000',
              fontSize: '1.1rem',
              fontWeight: 600
            }}>
              {this.state.originalRoomName}
            </div>
            <div className='row justify-content-center pt-3'>
              <img src={this.state.img} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }} />
            </div>

            <div className='pt-3'>
              <div className='py-1'>
                <b>Address</b>: {this.state.originalAddress}
              </div>
              <div className='py-1'>
                <b>Price</b>: ${this.state.originalPrice}
              </div>
              <div className='py-1'>
                <b>Minimum Players</b>: {this.state.originalMinimumPlayers}
              </div>
              <div className='py-1'>
                <b>Difficulty</b>: {this.state.originalDifficulty}
              </div>
              <div className='py-1'>
                <b>Time limit</b>: {this.state.originalTimeLimit}
              </div>
              <div className='py-1'>
                <b>Phone number</b>: {this.state.originalPhoneNumber}
              </div>
              <div className='py-1'>
                <b>Description</b>: {this.state.originalDescription}
              </div>

            </div>

          </div>
        </div>

        <EditForm
          entryId={this.state.entryId}
          closeEdit={this.props.closeEdit}
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
        />

      </div>
    );
  }
}
