import React from 'react';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formCompleted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    if (
      this.props.roomName.length !== 0 || this.props.roomName === this.props.ogRoomName ||
      this.props.img.length !== 0 || this.props.img === this.props.ogImg ||
      this.props.address.length !== 0 || this.props.address === this.props.ogAddress ||
      this.props.price.length !== 0 || this.props.price === this.props.ogPrice ||
      this.props.minimumPlayers.length !== 0 || this.props.minimumPlayers === this.props.ogMinimumPlayers ||
      this.props.difficulty.length !== 0 || this.props.difficulty === this.props.ogDifficulty ||
      this.props.timeLimit.length !== 0 || this.props.timeLimit === this.props.ogTimeLimit ||
      this.props.phoneNumber.length !== 0 || this.props.phoneNumber === this.props.ogPhoneNumber ||
      this.props.description.length !== 0 || this.props.description === this.props.ogDescription
    ) {
      // console.log('ok');
      event.preventDefault();
      this.props.closeEdit();
    } else {

      event.preventDefault();

      const reqObj = {};

      // reqObj.entryId = this.props.entryId;
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
          // this.setState({

          // });
        })
        .catch(err => console.error(err));

      this.props.closeEdit();

    }

    // console.log('submitted!');
    // console.log('all inputs: ',
    //   `${this.props.roomName},
    //   ${this.props.img},
    //   ${this.props.address},
    //   ${this.props.price},
    //   ${this.props.minimumPlayers},
    //   ${this.props.difficulty},
    //   ${this.props.timeLimit},
    //   ${this.props.phoneNumber},
    //   ${this.props.description}`
    // );
  }

  render() {

    // console.log('this.props.entryId: ', this.props.entryId);
    // console.log('type this.props.entryId: ', typeof this.props.entryId);

    return (
      <div className='d-flex justify-content-center mt-3 mb-3'>
        <form
          autoComplete='off'
          className='new-listing'
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
                // value={this.state.roomName}
                // ********** ERROR HAPPENING HERE **********
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
                // value={this.state.img}
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
                // value={this.state.address}
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
                // value={this.state.price}
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
                // value={this.state.minimumPlayers}
                onChange={this.props.handleMinimumPlayers}
                maxLength={2} />
            </label>

            <label htmlFor='difficulty'>
              <select
                // required
                className='dropdown'
                name='difficulty'
                id='difficulty'
                // placeholder={this.state.difficulty}
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
                // value={this.state.timeLimit}
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
                // value={this.state.phoneNumber}
                onChange={this.props.handlePhoneNumber}
                maxLength={10}
              />
            </label>

            <label htmlFor='description'>
              <textarea
                className='new-listin-desc'
                name='description' id='description'
                placeholder={this.props.description}
                // value={this.state.description}
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
