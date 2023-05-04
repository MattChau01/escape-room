import React from 'react';

export default function ListingForm(props) {
  return (
    <div className='mt-5'>
      {/* <div className='text-right mr-5 v-signout'>
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
        }} onClick={props.handleSignOut}>Sign out</button>
      </div> */}
      <div className='text-center mt-3'>

        <div className='d-flex justify-content-center text-center'>
          <p style={{
            fontSize: '1.4rem'
          }}>
            Create a new listing here:
          </p>
        </div>

        <div>
          <div className='d-flex justify-content-center mt-3 mb-3'>
            <form autoComplete='off' className='new-listing' onSubmit={props.handleSubmit}>
              <label className='d-flex justify-content-center mt-3'
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#5A5A5A'
                }}>
                New listing
              </label>

              <div>

                <label htmlFor='roomName'>
                  <input className='new-listing-input' name='roomName' id='roomName' type='text' placeholder='Room name' value={props.roomName} onChange={props.roomNameChange} />
                </label>

                <label htmlFor='imageUrl'>
                  <input className='new-listing-input' name='imageUrl' id='imageUrl' type='text' placeholder='Image link' value={props.imageUrl} onChange={props.imageUrlChange} />
                </label>

                <label htmlFor='address'>
                  <input className='new-listing-input' name='address' id='address' type='text' placeholder='Address' value={props.address} onChange={props.addressChange} />
                </label>

                <label htmlFor='price'>
                  <input className='new-listing-input' name='price' id='price' type='text' placeholder='Price' value={props.price} onChange={props.priceChange} />
                </label>

                <label htmlFor='minimumPlayers'>
                  <input className='new-listing-input' name='minimumPlayers' id='minimumPlayers' type='text' placeholder='Minimum players' value={props.minimumPlayers} onChange={props.minimumPlayersChange} />
                </label>

                <label htmlFor='difficulty'>
                  <input className='new-listing-input' name='difficulty' id='difficulty' type='text' placeholder='Difficulty' value={props.difficulty} onChange={props.difficultyChange} />
                </label>

                <label htmlFor='timeLimit'>
                  <input className='new-listing-input' name='timeLimit' id='timeLimit' type='text' placeholder='Time limit' value={props.timeLimit} onChange={props.timeLimitChange} />
                </label>

                <label htmlFor='phoneNumber'>
                  <input className='new-listing-input' name='phoneNumber' id='phoneNumber' type='text' placeholder='Phone number' value={props.phoneNumber} onChange={props.phoneNumberChange} />
                </label>

                <label htmlFor='description'>
                  <textarea className='new-listin-desc' name='description' id='description' placeholder='Description' value={props.description} onChange={props.descriptionChange} />
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
  );
}
