import React from 'react';
import Header from '../components/header';
import ListingForm from '../components/new-listing-form';
import VendorListings from '../components/vendor-listings';
import EditListing from '../components/edit-listing';

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: [],
      imageUrl: [],
      address: [],
      price: [],
      minimumPlayers: [],
      difficulty: [],
      timeLimit: [],
      phoneNumber: [],
      description: [],
      newListingButton: false,
      editClicked: false,
      listings: [],
      userId: window.localStorage.getItem('userId'),
      listingClicked: [],
      currentListing: [],
      deleteClicked: false
    };
    this.roomName = this.roomName.bind(this);
    this.imageLink = this.imageLink.bind(this);
    this.address = this.address.bind(this);
    this.price = this.price.bind(this);
    this.minimumPlayers = this.minimumPlayers.bind(this);
    this.difficulty = this.difficulty.bind(this);
    this.timeLimit = this.timeLimit.bind(this);
    this.phoneNumber = this.phoneNumber.bind(this);
    this.description = this.description.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.editClick = this.editClick.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
    this.currentListing = this.currentListing.bind(this);
    this.handleNewRoomName = this.handleNewRoomName.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentDidMount() {
    const req = {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('Token')
      }
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

  componentDidUpdate() {

    const req = {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('Token')
      }
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

  roomName(event) {

    this.setState({
      roomName: event.target.value
    });
  }

  imageLink(event) {
    this.setState({
      imageUrl: event.target.value
    });
  }

  address(event) {
    this.setState({
      address: event.target.value
    });
  }

  price(event) {
    this.setState({
      price: event.target.value
    });
  }

  minimumPlayers(event) {
    this.setState({
      minimumPlayers: event.target.value
    });
  }

  difficulty(event) {
    this.setState({
      difficulty: event.target.value
    });
  }

  timeLimit(event) {
    this.setState({
      timeLimit: event.target.value
    });
  }

  phoneNumber(event) {

    const regex = /^[0-9\b]+$/;

    const number = event.target.value;

    if (number === '' || regex.test(number)) {
      this.setState({
        phoneNumber: event.target.value
      });
    }

  }

  description(event) {
    this.setState({
      description: event.target.value
    });
  }

  openForm(event) {
    event.preventDefault();
    this.setState({
      newListingButton: true
    });
  }

  closeForm(event) {
    event.preventDefault();
    this.setState({
      newListingButton: false
    });
  }

  handleSubmit(event) {

    if (
      this.state.roomName === '' ||
      this.state.imageUrl === '' ||
      this.state.address === '' ||
      this.state.price === '' ||
      this.state.minimumPlayers === '' ||
      this.state.difficulty === '' ||
      this.state.timeLimit === '' ||
      this.state.description === '') {
      event.preventDefault();
      return false;
    } else {

      event.preventDefault();

      this.setState({
        deleteClicked: false
      });

      const reqObj = {};

      reqObj.userId = window.localStorage.getItem('userId');
      reqObj.roomName = this.state.roomName;
      reqObj.imageUrl = this.state.imageUrl;
      reqObj.address = this.state.address;
      reqObj.price = this.state.price;
      reqObj.minimumPlayers = this.state.minimumPlayers;
      reqObj.difficulty = this.state.difficulty;
      reqObj.timeLimit = this.state.timeLimit;
      reqObj.phoneNumber = this.state.phoneNumber;
      reqObj.description = this.state.description;

      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': window.localStorage.getItem('Token')
        },
        body: JSON.stringify(reqObj)
      };

      fetch('/api/listings/post', req)
        .then(res => res.json())
        .then(result => {

          this.setState({
            roomName: '',
            imageUrl: '',
            address: '',
            price: '',
            minimumPlayers: '',
            difficulty: '',
            timeLimit: '',
            phoneNumber: '',
            description: '',
            newListingButton: false
          });

        })
        .catch(err => console.error(err));

    }

  }

  editClick() {
    this.setState({
      editClicked: true
    });
  }

  currentListing(entryId) {
    this.setState({
      listingClicked: entryId
    });
  }

  closeEdit() {
    this.setState({
      editClicked: false,
      deleteClicked: false
    });
  }

  handleNewRoomName(event) {
    this.setState({
      newRoomName: event.target.value
    });
  }

  deleteButton() {
    // console.log('listing clicked: ', this.state.listingClicked);

    // const reqObj = {};

    // reqObj.entryId = this.state.currentListing;

    // const req = {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-access-token': window.localStorage.getItem('Token')
    //   }
    //   // body: JSON.stringify(reqObj)
    // };

    // fetch(`/api/listings/delete/${this.state.currentListing}`, req)
    //   .then(res => res.json())
    //   .then(result => {
    //     // this.setState({
    //     //   deleteClicked: true
    //     // });
    //   })
    //   .catch(err => console.error(err));

    // console.log('delete button clicked!');
    this.setState({
      deleteClicked: true
    });

  }

  cancelDelete() {
    this.setState({
      deleteClicked: false
    });
  }

  confirmDelete() {

    const req = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('Token')
      }
      // body: JSON.stringify(reqObj)
    };

    fetch(`/api/listings/delete/${this.state.listingClicked}`, req)
      .then(res => res.json())
      .then(result => {
        this.setState({
          deleteClicked: false,
          editClicked: false
        });
      })
      .catch(err => console.error(err));

    // console.log('confirmed delete!');
    // this.setState({
    //   deleteClicked: false,
    //   editClicked: false
    // });

  }

  render() {

    return (
      <>
        <Header
          participants={this.props.participants}
          routeVSignin={this.props.routeVSignin}
          toHome={this.props.toHome} />
        <div className='d-flex mt-2'>
          <div className='col mt-2 text-left'>
            <h6>Current user: {window.localStorage.getItem('username')}</h6>
          </div>
          <div className='col-4 mr-2 text-right v-signout'>
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
            }} onClick={this.props.handleSignOut}>Sign out</button>

          </div>
        </div>

        {
          (this.state.newListingButton === true)
            ? <ListingForm
              handleSubmit={this.handleSubmit}
              roomName={this.state.roomName}
              roomNameChange={this.roomName}
              imageUrl={this.state.imageUrl}
              imageUrlChange={this.imageLink}
              address={this.state.address}
              addressChange={this.address}
              price={this.state.price}
              priceChange={this.price}
              minimumPlayers={this.state.minimumPlayers}
              minimumPlayersChange={this.minimumPlayers}
              difficulty={this.state.difficulty}
              difficultyChange={this.difficulty}
              timeLimit={this.state.timeLimit}
              timeLimitChange={this.timeLimit}
              phoneNumber={this.state.phoneNumber}
              phoneNumberChange={this.phoneNumber}
              description={this.state.description}
              descriptionChange={this.description}
              closeForm={this.closeForm}
              formatPhoneNumber={this.formatPhoneNumber}
               />
            : (
              <div>

                {
                  (this.state.editClicked === false)
                    ? (
                      <div className='text-center mt-5' style={{
                        fontSize: '1.4rem'
                      }}>
                        Your listings here:
                      </div>
                      )
                    : (
                      <>
                      &nbsp;
                      </>
                      )
                }

                <div className='text-center mt-2'>
                  {
                    (this.state.editClicked === false)
                      ? (
                        <VendorListings
                          editClick={this.editClick}
                          editClicked={this.state.editClicked}
                          listings={this.state.listings}
                          currentListing={this.currentListing}
                          />
                        )
                      : (
                        <>
                        &nbsp;
                        </>
                        )
                  }

                  {
                    (this.state.editClicked === true)
                      ? (
                        <div>

                          <div>
                            <div style={{
                              fontSize: '1.4rem'
                            }}>
                              Room details:
                            </div>
                            <br />

                            <EditListing
                              difficulty={this.state.difficulty}
                              difficultyChange={this.difficulty}
                              listings={this.state.listings}
                              listingClicked={this.state.listingClicked}
                              handleNewRoomName={this.handleNewRoomName}
                              closeEdit={this.closeEdit}
                            />

                          </div>

                          {/* `DELETE` function here */}
                          <div className='pt-2'>
                            <div>
                              <button className='delete-button'>
                                <i className="fa-regular fa-trash-can"
                                  style={{
                                    fontSize: '1.5rem',
                                    cursor: 'pointer'
                                  }}
                                  onClick={this.deleteButton}
                                />
                              </button>
                            </div>
                            {
                              (this.state.deleteClicked === false)
                                ? (
                                  <div>
                                    &nbsp;
                                  </div>
                                  )
                                : (
                                  <div className='container'>
                                    <div className='d-flex'>
                                      <div className='col'>
                                        <i
                                        className="fa-solid fa-xmark cancel-delete"
                                        onClick={this.cancelDelete} />
                                      </div>
                                      <div className='col'>
                                        <i
                                        className="fa-solid fa-check confirm-delete"
                                        onClick={this.confirmDelete}/>
                                      </div>
                                    </div>
                                  </div>
                                  )
                            }
                          </div>

                          <div className='pt-5'>
                            <button className='close-edit-form' onClick={this.closeEdit}
                              style={{
                                cursor: 'pointer'
                              }}>Close</button>
                          </div>

                        </div>
                        )
                      : (
                        <>
                      &nbsp;
                        </>
                        )
                  }

                  {
                    (this.state.editClicked === false)
                      ? (
                        <div className='d-flex justify-content-center mt-3 mb-3 add-listing'>
                          <button style={{
                            backgroundColor: '#1976D2',
                            color: '#fff',
                            borderRadius: '5rem',
                            width: '7.5rem',
                            textAlign: 'center',
                            paddingTop: '.25rem',
                            cursor: 'pointer',
                            outline: 'none',
                            borderStyle: 'none'
                          }} onClick={this.openForm}>
                            Add a listing
                          </button>
                        </div>
                        )
                      : (
                        <>
                        &nbsp;
                        </>
                        )
                  }

                </div>

              </div>
              )
        }
      </>
    );
  }

}
