import React from 'react';

export default function SearchBar(props) {
  return (
    <div className='mt-4'>
      <div className='d-flex justify-content-center align-items-center' style={{ fontWeight: '600', fontSize: '1.5rem' }}>
        Find a room near you!
      </div>
      <div className='mt-3 d-flex justify-content-center align-items-center'>
        <form>
          <label htmlFor='search' id='search'>
            <input autoComplete='no' type='text' id='search' placeholder='Type here...' style={{ width: '18rem' }}/>
          </label>
        </form>
      </div>
    </div>
  );
}
