import React from 'react';

export default function SearchBar(props) {
  return (
    <div className='mt-5 pt-5'>
      <div className='d-flex justify-content-center align-items-center'>
        <form>
          <label htmlFor='search' id='search'>
            <input autoComplete='no' type='text' id='search' placeholder='Type here...' style={{ width: '18rem' }}/>
          </label>
        </form>
      </div>
    </div>
  );
}
