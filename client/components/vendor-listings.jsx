import React from 'react';
// import React, { useEffect, useState } from 'react';

// export default function VendorListings(props) {

//   const [userId] = useState(window.localStorage.getItem('userId'));
//   const [listings, setListings] = useState([]);

//   useEffect(() => {

//     if (userId === null) {
//       return false;
//     } else {

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
//           setListings(data);
//         })
//         .catch(err => console.error(err));

//     }

//   });

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

        this.setState({
          listings: data
        });
      })
      .catch(err => console.error(err));

  }

  render() {
    return (
      <div>
        {/* TEST HERE */}

        {
          (this.state.listings.length === 0)
            ? (
              <div className='my-5 py-5'>
                <h5>
                  None at the moment.<br />Click on the button below to get started!
                </h5>
              </div>
              )
            : (
              <div>
                {this.state.listings.map(item => {
                  return (
                    <div key={item.entryId} className='catalog-container'>
                      <div className='mt-3' style={{
                        backgroundColor: '#ececec',
                        width: '20rem',
                        height: '19rem'
                      }}>

                        <div>
                          <div className='row justify-content-center py-2' style={{
                            color: '#000',
                            fontSize: '1.1rem',
                            fontWeight: 600
                          }}>
                            {item.roomName}
                          </div>
                          <div className='row justify-content-center'>
                            <img src={item.imageUrl} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }} />
                          </div>
                        </div>

                        <div className='row py-4'>

                          <div className='col'>
                            Difficulty: {item.difficulty}
                          </div>

                          <div className='col'>
                            ${Number(item.price)} /person
                          </div>

                        </div>

                        {/* EDIT BUTTON WILL GO HERE */}
                        <div className='justify-content-center'>
                          <i style={{
                            cursor: 'pointer'
                          }} className="fa-regular fa-pen-to-square" />
                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>
              )
        }

        {/* {this.state.listings.map(item => {
          return (
            <div key={item.entryId} className='catalog-container'>
              <div className='mt-3' style={{
                backgroundColor: '#ececec',
                width: '20rem',
                height: '19rem'
              }}>

                <div>
                  <div className='row justify-content-center py-2' style={{
                    color: '#000',
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}>
                    {item.roomName}
                  </div>
                  <div className='row justify-content-center'>
                    <img src={item.imageUrl} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }} />
                  </div>
                </div>

                <div className='row py-4'>

                  <div className='col'>
                    Difficulty: {item.difficulty}
                  </div>

                  <div className='col'>
                    ${Number(item.price)} /person
                  </div>

                </div>

                EDIT BUTTON WILL GO HERE
                <div className='justify-content-center'>
                  <i className="fa-regular fa-pen-to-square" />
                </div>

              </div>

            </div>
          );
        })} */}

      </div>
    );
  }

}
