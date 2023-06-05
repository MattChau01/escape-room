import React from 'react';
// import React, { useState } from 'react';
import Header from '../components/header';
// TEST
import ParseRoomDetails from '../lib/parse-room-details';

// export default function RoomDetails(props) {

//   // props.currentListing();

//   const [roomId] = useState(ParseRoomDetails(window.location.hash));
//   // console.log('roomId: ', roomId);

//   // console.log('route: ', roomId);

//   // const [listing] = useState(props.listings[0]); //eslint-disable-line

//   // console.log('props.listings: ', props.listings);
//   // console.log('current prop: ', props.listings.entryId); //eslint-disable-line
//   // console.log('route: ', window.location.hash.slice()); //eslint-disable-line

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
      return <div>Loading...</div>; // Add a loading state or error handling here
    }

    const currentRoom = listings[currentListing];

    // TEST ABOVE

    return (
      <>
        <Header participants={this.props.participants} routeVSignin={this.props.routeVSignin} toHome={this.props.toHome} />
        <div className='mt-3'>
          {/* d-flex justify-content-center text-center */}
          <div>
            {/* poster and name */}
            <div className='d-flex flex-column'>

              <div style={{
                color: '#000',
                fontSize: '1.25rem',
                fontWeight: 600
                // width: '8rem'
              }} className='row justify-content-center'>
                {/* {this.state.listings[this.state.currentListing].roomName} */}
                {/* TEST */}
                {currentRoom.roomName}
              </div>

              <div className='row justify-content-center mt-2'>
                {/* <img src={this.state.listings[this.state.currentListing].imageUrl} style={{ width: '15rem', height: '18rem', objectFit: 'cover' }} /> */}
                {/* TEST */}
                <img src={currentRoom.imageUrl} style={{ width: '15rem', height: '18rem', objectFit: 'cover' }} />
                {/* {currentRoom.description} */}
              </div>

              <div style={{ width: '15rem' }}>
                <div className='text-center'>
                  {/* {this.state.listings[this.state.currentListing].description} */}
                  {/* TEST */}
                  {currentRoom.description}
                </div>
              </div>

              {/*

              <div style={{ width: '15rem' }}>
                <div className=''>
                  {this.state.listings[this.state.currentListing].description}
                  {currentRoom.description}
                </div>
              </div>
              */}

            </div>

          </div>

        </div>
      </>
    );

  }

}
