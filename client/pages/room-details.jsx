import React from 'react';
import Header from '../components/header';
import ParseRoomDetails from '../lib/parse-room-details';

export default class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings,
      currentListing: ParseRoomDetails(window.location.hash)
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

    const { listings, currentListing } = this.state;

    if (!listings || !listings[currentListing]) {
      return (
        <>
          <Header
            participants={this.props.participants}
            routeVSignin={this.props.routeVSignin}
            toHome={this.props.toHome} />
          <div className='text-center'>
            <div className='mt-5'>Loading...</div>
            <div className="lds-ring mt-5 pt-5"><div /><div /><div /><div /></div>
          </div>
        </>
      );
    } else {

      const currentRoom = listings[currentListing];

      return (
        <>
          <Header
            participants={this.props.participants}
            routeVSignin={this.props.routeVSignin}
            toHome={this.props.toHome}
            aboutUs={this.props.aboutUs} />
          <div className='container'>

            <div className='row justify-content-center'>
              <div className='mt-3'>
                <div style={{
                  color: '#000',
                  fontSize: '1.25rem',
                  fontWeight: 600
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

}
