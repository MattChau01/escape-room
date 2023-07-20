import React from 'react';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      originalRoomName: this.props.roomName,
      originalImg: this.props.img,
      originalAddress: this.props.address,
      originalPrice: this.props.price,
      originalMinimumPlayers: this.props.minimumPlayers,
      originalDifficulty: this.props.difficulty,
      originalTimeLimit: this.props.timeLimit,
      originalPhoneNumber: this.props.phoneNumber,
      originalDescription: this.props.description
    });
  }

  handleSubmit(event) {

    if (

      this.props.roomName === this.state.originalRoomName ||
      this.props.img === this.state.originalImg ||
      this.props.address === this.state.originalAddress ||
      this.props.price === this.state.originalPrice ||
      this.props.minimumPlayers === this.state.originalMinimumPlayers ||
      this.props.difficulty === this.state.originalDifficulty ||
      this.props.timeLimit === this.state.originalTimeLimit ||
      this.props.phoneNumber === this.state.originalPhoneNumber ||
      this.props.description === this.state.originalDescription

    ) {
      event.preventDefault();
      this.props.closeEdit();
    } else {

      event.preventDefault();

      const reqObj = {};

      reqObj.roomName = this.props.roomName;
      reqObj.imageUrl = this.props.img;
      reqObj.description = this.props.description;
      reqObj.address = this.props.address;
      reqObj.price = this.props.price;
      reqObj.minimumPlayers = this.props.minimumPlayers;
      reqObj.difficulty = this.props.difficulty;
      reqObj.timeLimit = this.props.timeLimit;
      reqObj.phoneNumber = this.props.phoneNumber;

      const req = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': window.localStorage.getItem('Token')
        },
        body: JSON.stringify(reqObj)
      };

      fetch(`/api/listings/patch/${this.props.entryId}`, req)
        .then(res => res.json())
        .then(result => {
        })
        .catch(err => console.error(err));

      this.props.closeEdit();

    }

  }

  render() {

    return (
      <div className='d-flex justify-content-center mt-3 mb-3'>
        <form
          autoComplete='off'
          className='edit-form'
          onSubmit={this.handleSubmit}
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
                placeholder={this.props.roomName}
                onChange={this.props.handleNewName}
              />
            </label>

            <label htmlFor='imageUrl'>
              <input
                className='new-listing-input'
                name='imageUrl'
                id='imageUrl'
                type='text'
                placeholder={this.props.img}
                onChange={this.props.handleImg}
              />
            </label>

            <label htmlFor='address'>
              <input
                className='new-listing-input'
                name='address'
                id='address'
                type='text'
                placeholder={this.props.address}
                onChange={this.props.handleAddress}
              />
            </label>

            <label htmlFor='price'>
              <input
                className='new-listing-input'
                name='price'
                id='price'
                type='text'
                placeholder={this.props.price}
                onChange={this.props.handlePrice}
                maxLength={3} pattern='[0-9]*'
              />
            </label>

            <label htmlFor='minimumPlayers'>
              <input
                className='new-listing-input'
                name='minimumPlayers'
                id='minimumPlayers'
                type='text'
                placeholder={this.props.minimumPlayers}
                onChange={this.props.handleMinimumPlayers}
                maxLength={2} />
            </label>

            <label htmlFor='difficulty'>
              <select
                style={{
                  cursor: 'pointer'
                }}
                className='dropdown'
                name='difficulty'
                id='difficulty'
                onClick={this.props.handleDifficulty}
              >
                <option value=''>Select an option</option>
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
                placeholder={this.props.timeLimit}
                onChange={this.props.handleTimeLimit}
              />
            </label>

            <label htmlFor='phoneNumber'>
              <input
                className='new-listing-input'
                name='phoneNumber'
                id='phoneNumber'
                type='text'
                placeholder={this.props.phoneNumber}
                onChange={this.props.handlePhoneNumber}
                maxLength={10}
              />
            </label>

            <label htmlFor='description'>
              <textarea
                className='new-listin-desc'
                name='description' id='description'
                placeholder={this.props.description}
                onChange={this.props.handleDescription}
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
    );
  }
}
