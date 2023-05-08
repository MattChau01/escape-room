import React, { useEffect, useState } from 'react';

export default function VendorListings(props) {

  const [listings, setListings] = useState({}); //eslint-disable-line

  console.log('listing empty object: ', listings); //eslint-disable-line

  useEffect(() => {
    // console.log('useEffect here');
    console.log('user: ', window.localStorage.getItem('userId')); //eslint-disable-line

    const reqObj = {};
    reqObj.userId = window.localStorage.getItem('userId');

    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify(reqObj)
    };

    fetch('/api/listings/vendor', req)
      .then(res => res.json())
      .then(listings => {
        console.log('listings: ', listings); //eslint-disable-line
      })
      .catch(err => console.error(err));

  });

  return (
    <div>
      LIST OF POSTINGS
    </div>
  );
}
