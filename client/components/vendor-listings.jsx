import React from 'react';
// import React, { useEffect, useState } from 'react';

// export default function VendorListings(props) {

//   const [userId] = useState(window.localStorage.getItem('userId'));
//   const [listings, setListings] = useState([]);

//   // console.log('listing empty object: ', listings); //eslint-disable-line

//   useEffect(() => {
//     // console.log('useEffect here');
//     // console.log('userId: ', userId); //eslint-disable-line

//     if (userId === null) {
//       // console.log('no token!');
//       return false;
//     } else {
//       // console.log('token present');

//       const req = {
//         // method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-access-token': window.localStorage.getItem('Token')
//         }
//         // body: JSON.stringify(reqObj)
//       };

//       fetch(`/api/listings/vendor/${userId}`, req)
//         .then(res => res.json())
//         .then(data => {
//           console.log('listings: ', data);
//           setListings(data);
//         })
//         .catch(err => console.error(err));

//     }

//   });

//   // console.log('listings after fetch: ', listings);

//   return (
//     <div>
//       LIST OF POSTINGS
//     </div>
//   );
// }

// TEST
export default class VendorListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      userId: window.localStorage.getItem('userId')
    };
  }

  componentDidMount() {
    // console.log('comp did mount');
    console.log('state:userId: ', this.state.userId);  //eslint-disable-line

    const req = {
      // method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('Token')
      }
      // body: JSON.stringify(reqObj)
    };

    fetch(`/api/listings/vendor/${this.state.userId}`, req)
      .then(res => res.json())
      .then(data => {
        console.log('listings: ', data); //eslint-disable-line
        // setListings(data);
      })
      .catch(err => console.error(err));

  }

  render() {
    return (
      <div>
        LIST OF POSTINGS
      </div>
    );
  }

}
