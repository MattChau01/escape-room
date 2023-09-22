import React from 'react';

export default function ListingForm(props) {
  return (
    <div className='mt-3'>
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
                  <input
                    className='new-listing-input'
                    name='roomName'
                    id='roomName'
                    type='text'
                    placeholder='Room name'
                    value={props.roomName}
                    onChange={props.roomNameChange} />
                </label>

                <label htmlFor='imageUrl'>
                  <input
                    className='new-listing-input'
                    name='imageUrl'
                    id='imageUrl'
                    type='text'
                    placeholder='Image link'
                    value={props.imageUrl}
                    onChange={props.imageUrlChange} />
                </label>

                <label htmlFor='address'>
                  <input
                    className='new-listing-input'
                    name='address'
                    id='address'
                    type='text'
                    placeholder='Address'
                    value={props.address}
                    onChange={props.addressChange} />
                </label>

                <label htmlFor='price'>
                  <input
                    className='new-listing-input'
                    name='price'
                    id='price'
                    type='text'
                    placeholder='Price ($ per person)'
                    value={props.price}
                    onChange={props.priceChange}
                    maxLength={3} pattern='[0-9]*' />
                </label>

                <label htmlFor='minimumPlayers'>
                  <input
                    className='new-listing-input'
                    name='minimumPlayers'
                    id='minimumPlayers'
                    type='text'
                    placeholder='Minimum players'
                    value={props.minimumPlayers}
                    onChange={props.minimumPlayersChange}
                    maxLength={2}/>
                </label>

                <label htmlFor='difficulty'>
                  <select
                    style={{
                      cursor: 'pointer'
                    }}
                    required
                    className='dropdown'
                    name='difficulty'
                    id='difficulty'
                    onClick={props.difficultyChange}>

                    <option value=''>Select a difficulty here</option>
                    <option value='Easy'>Easy</option>
                    <option value='Medium'>Medium</option>
                    <option value='Hard'>Hard</option>

                  </select>
                </label>

                <label htmlFor='timeLimit'>
                  <input
                    className='new-listing-input'
                    name='timeLimit'
                    id='timeLimit'
                    type='text'
                    placeholder='Time limit (minutes)'
                    value={props.timeLimit}
                    onChange={props.timeLimitChange} />
                </label>

                <label htmlFor='phoneNumber'>
                  <input
                    className='new-listing-input'
                    name='phoneNumber'
                    id='phoneNumber'
                    type='text'
                    placeholder='Phone number'
                    value={props.phoneNumber}
                    onChange={props.phoneNumberChange}
                    maxLength={10} />
                </label>

                <label htmlFor='description'>
                  <textarea
                    className='new-listin-desc'
                    name='description'
                    id='description'
                    placeholder='Description'
                    value={props.description}
                    onChange={props.descriptionChange} />
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

        <div className='mt-5 mb-5'>
          <button className='close-form' style={{
            backgroundColor: '#046290',
            color: '#fff',
            borderRadius: '5rem',
            width: '7rem',
            textAlign: 'center',
            paddingTop: '.25rem',
            cursor: 'pointer',
            outline: 'none',
            borderStyle: 'none'
          }} onClick={props.closeForm} >Close form</button>
        </div>

      </div>
    </div>
  );
}
