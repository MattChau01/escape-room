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
      userId: window.localStorage.getItem('userId')
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

    if (this.state.roomName === '' || this.state.imageUrl === '' || this.state.address === '' || this.state.price === '' || this.state.minimumPlayers === '' || this.state.difficulty === '' || this.state.timeLimit === '' || this.state.description === '') {
      event.preventDefault();
      return false;
    } else {

      event.preventDefault();

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

  editClick(event) {
    event.preventDefault();
    // console.log('editclicked: ', this.state.editClicked);
    this.setState({
      editClicked: true
    });
    // ********** DO NOT DELETE BELOW - TESTING CONDITIONAL FORM ON SAME PAGE **********
    // window.location.hash = 'edit-room';

    // console.log('TEST: ', this.state.description);

  }

  closeEdit(event) {
    event.preventDefault();
    this.setState({
      editClicked: false
    });
  }

  render() {

    // console.log('TEST: ', this.state.description);

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
                  {/* **********DO NOT DELETE - TESTING CONDITIONAL RENDER********** */}
                  {/* <VendorListings
                    editClick={this.editClick}
                    editClicked={this.state.editClicked} /> */}

                  {/* BELOW IS CONDITIONALLY HIDING ALL LISTINGS IF THE BUTTON IS CLICKED OR NOT */}
                  {
                    (this.state.editClicked === false)
                      ? (
                        <VendorListings
                          editClick={this.editClick}
                          editClicked={this.state.editClicked}
                          listings={this.state.listings} />
                        )
                      : (
                        <>
                        &nbsp;
                        </>
                        )
                  }

                  {/* CONDITIONAL RENDER FORM IF BUTTON WAS CLICKED */}
                  {
                    (this.state.editClicked === true)
                      ? (
                        <div>

                          {/* EDIT FORM BELOW */}
                          <div>
                            <div style={{
                              fontSize: '1.4rem'
                            }}>
                              Edit form here
                            </div>
                            <br />

                            <EditListing
                              difficulty={this.state.difficulty}
                              difficultyChange={this.difficulty}
                            />

                            {/* <div>
                              <div>
                                <div className='d-flex justify-content-center mt-3 mb-3'>
                                  <form
                                    autoComplete='off'
                                    className='new-listing'
                                    // onSubmit={props.handleSubmit}
                                    >
                                    <label className='d-flex justify-content-center mt-3'
                                      style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        color: '#5A5A5A'
                                      }}>
                                      Edit listing
                                    </label>

                                    <div>

                                      <label htmlFor='roomName'>
                                        <input
                                          className='new-listing-input'
                                          name='roomName'
                                          id='roomName'
                                          type='text'
                                          placeholder='Room name'
                                          // value={props.roomName}
                                          // onChange={props.roomNameChange}
                                          />
                                      </label>

                                      <label htmlFor='imageUrl'>
                                        <input
                                          className='new-listing-input'
                                          name='imageUrl'
                                          id='imageUrl'
                                          type='text'
                                          placeholder='Image link'
                                          // value={props.imageUrl}
                                          // onChange={props.imageUrlChange}
                                          />
                                      </label>

                                      <label htmlFor='address'>
                                        <input
                                          className='new-listing-input'
                                          name='address'
                                          id='address'
                                          type='text'
                                          placeholder='Address'
                                          // value={props.address}
                                          // onChange={props.addressChange}
                                          />
                                      </label>

                                      <label htmlFor='price'>
                                        <input
                                          className='new-listing-input'
                                          name='price'
                                          id='price'
                                          type='text'
                                          placeholder='Price ($ per person)'
                                          // value={props.price}
                                          // onChange={props.priceChange}
                                          maxLength={3} pattern='[0-9]*'
                                          />
                                      </label>

                                      <label htmlFor='minimumPlayers'>
                                        <input
                                          className='new-listing-input'
                                          name='minimumPlayers'
                                          id='minimumPlayers'
                                          type='text'
                                          placeholder='Minimum players'
                                          // value={props.minimumPlayers}
                                          // onChange={props.minimumPlayersChange}
                                          maxLength={2} />
                                      </label>

                                      <label htmlFor='difficulty'>
                                        <select
                                          required
                                          className='dropdown'
                                          name='difficulty'
                                          id='difficulty'
                                          // onClick={props.difficultyChange}
                                          >
                                          <option value=''>Select a difficulty here</option>
                                          <option value='Easy'>Easy</option>
                                          <option value='Medium'>Medium</option>
                                          <option value='Hard'>Hard</option>
                                        </select>
                                      </label>

                                      <label htmlFor='timeLimit'>
                                        <input
                                          className='new-listing-input'
                                          name='timeLimit' id='timeLimit'
                                          type='text'
                                          placeholder='Time limit (minutes)'
                                          // value={props.timeLimit}
                                          // onChange={props.timeLimitChange}
                                          />
                                      </label>

                                      <label htmlFor='phoneNumber'>
                                        <input
                                          className='new-listing-input'
                                          name='phoneNumber'
                                          id='phoneNumber'
                                          type='text'
                                          placeholder='Phone number'
                                          // value={props.phoneNumber}
                                          // onChange={props.phoneNumberChange}
                                          maxLength={10}
                                          />
                                      </label>

                                      <label htmlFor='description'>
                                        <textarea
                                          className='new-listin-desc'
                                          name='description' id='description'
                                          placeholder='Description'
                                          // value={props.description}
                                          // onChange={props.descriptionChange}
                                           />
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
                            </div> */}

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

                  {/* TESTING CONDITIONAL INFO ABOVE BUTTON */}
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

                {/* <div style={{
                  position: 'absolute',
                  backgroundColor: '#ececec',
                  width: '10rem',
                  height: '10rem'
                }}>

                  {
                    (this.state.editClicked === true)
                      ? (
                        <div className='text-center'
                          style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                          }}>
                          EDIT CLICKED: TRUE
                        </div>
                        )
                      : (
                        <div className='text-center'
                          style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0'
                          }}>
                          EDIT CLICKED: FALSE
                        </div>
                        )
                  }
                </div> */}

              </div>
              )
        }
      </>
    );
  }

}
