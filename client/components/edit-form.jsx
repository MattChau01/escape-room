import React from 'react';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
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
                required
                className='dropdown'
                name='difficulty'
                id='difficulty'
                // placeholder={this.state.difficulty}
                onClick={this.props.handleDifficulty}
              >
                <option value=''>{this.props.difficulty}</option>
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
