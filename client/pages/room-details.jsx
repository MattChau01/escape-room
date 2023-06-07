import React from 'react';
// import React, { useState } from 'react';
import Header from '../components/header';
// TEST
import ParseRoomDetails from '../lib/parse-room-details';

// export default function RoomDetails(props) {

//   // props.currentListing();

//   const [roomId] = useState(ParseRoomDetails(window.location.hash));

//   // const [listing] = useState(props.listings[0]); //eslint-disable-line

//   return (
//     <>
//       <Header participants={props.participants} routeVSignin={props.routeVSignin} toHome={props.toHome} />
//       <div className='text-center mt-3'>

//         {/* ROOM DETAILS
//         <div>
//           {props.listings[roomId].entryId}
//           <br />
//           {props.listings[roomId].roomName}
//         </div> */}

//         <div>

//           {/* poster and name */}
//           <div>
//             <div className='justify-content-center' style={{
//               color: '#000',
//               fontSize: '1.25rem',
//               fontWeight: 600
//               // width: '8rem'
//             }}>
//               {props.listings[roomId].roomName}
//             </div>
//             <div className='justify-content-center mt-2'>
//               <img src={props.listings[roomId].imageUrl} style={{ width: '15rem', height: '18rem', objectFit: 'cover' }} />
//             </div>

//             <div className='mt-3' style={{ width: '10rem' }}>
//               <div className='justify-content-center'>
//                 {props.listings[roomId].description}
//               </div>
//             </div>

//           </div>

//           {/* description */}
//           {/* <div >
//             <div className='jusify-content-ctenter' style={{
//               width: '15rem'
//             }}>
//               {props.listings[roomId].description}
//             </div>
//           </div> */}

//         </div>

//       </div>
//     </>
//   );
// }

export default class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings,
      currentListing: ParseRoomDetails(window.location.hash)
      // roomName: this.state.listings[this.state.currentListing].roomName
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listings !== this.props.listings) {
      this.setState({
        listings: this.props.listings
      });
    }
  }

  render() {

    // TEST BELOW

    const { listings, currentListing } = this.state;

    if (!listings || !listings[currentListing]) {
      return <div className='text-center'>Loading...</div>; // Add a loading state or error handling here
    }

    const currentRoom = listings[currentListing];

    // TEST ABOVE

    return (
      <>
        <Header participants={this.props.participants} routeVSignin={this.props.routeVSignin} toHome={this.props.toHome} />
        <div className='container'>

          <div className='row justify-content-center'>
            <div className='mt-3'>
              <div style={{
                color: '#000',
                fontSize: '1.25rem',
                fontWeight: 600
                // width: '8rem'
              }} className='justify-content-center text-center'>
                {currentRoom.roomName}
              </div>
            </div>
          </div>

          <div className='row mt-3 justify-content-center'>
            <div className='text-center'>
              <img src={currentRoom.imageUrl} className='rd-img' />
            </div>
          </div>

          <div className='rd-d'>

            <div className='rd-1'>

              <div className='mt-3 pt-5'>
                <div className='d-flex align-items-center justify-content-center text-center'>
                  <div style={{ width: '15rem' }}>
                    {currentRoom.description}
                  </div>
                </div>
              </div>

            </div>

            <div className='rd-2'>

              <div className='mt-5'>
                <div className='justify-content-center text-center'>
                  <div>Price: ${Number(currentRoom.price)}/person</div>
                </div>
              </div>

              <div className='mt-3'>
                <div className='justify-content-center text-center'>
                  <div>Minimum players: {Number(currentRoom.minimumPlayers)} players</div>
                </div>
              </div>

              <div className='mt-3'>
                <div className='justify-content-center text-center'>
                  <div>Difficulty: {currentRoom.difficulty}</div>
                </div>
              </div>

              <div className='mt-3'>
                <div className='justify-content-center text-center'>
                  <div>Time limit: {Number(currentRoom.timeLimit)} minutes</div>
                </div>
              </div>

              <div className='mt-3'>
                <div className='justify-content-center text-center'>
                  <div>Address: {currentRoom.address}</div>
                </div>
              </div>

              <div className='mt-3 mb-5 pb-4'>
                <div className='justify-content-center text-center'>
                  <div>Phone Number: {Number(currentRoom.phoneNumber)}</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </>
    );

  }

}
