import React from 'react';

export default class VendorListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // listings: [],
      // userId: window.localStorage.getItem('userId')
      // editClick: false
      // listingClicked: []
    };
    // this.editClicked = this.editClicked.bind(this);
  }

  componentDidMount() {

    // TEST
    // console.log('editClick state: ', this.state.editClick); //eslint-disable-line
    // TEST

    // Commenting out for test - migrating into parent component
    // ********** DO NOT DELETE **********
    // const req = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-access-token': window.localStorage.getItem('Token')
    //   }
    // };

    // fetch(`/api/listings/vendor/${this.state.userId}`, req)
    //   .then(res => res.json())
    //   .then(data => {

    //     this.setState({
    //       listings: data
    //     });
    //   })
    //   .catch(err => console.error(err));

    // ********** DO NOT DELETE **********

  }

  // editClicked() {
  //   // event.preventDefault();
  //   console.log('editclicked: ', this.state.listingClicked);

  // }

  render() {

    // console.log('is clicked: ', this.props.editClicked);
    // console.log('props.listing: ', this.props.listings);

    return (
      <div>

        {
          (this.props.listings.length === 0)
            ? (
              <div className='my-5 py-5'>
                <h5>
                  None at the moment.<br />Click on the button below to get started!
                </h5>
              </div>
              )
            : (
              <div>
                {this.props.listings.map(item => {

                  return (
                    <div key={item.entryId} className='catalog-container container'>
                      {/* {console.log('key: ', item.entryId)} */}
                      <div className='mt-3' style={{
                        backgroundColor: '#ececec',
                        width: '21.25rem',
                        height: '100%'

                        // height: '19rem'
                      }}>

                        <div>
                          <div className='row justify-content-center py-2' style={{
                            color: '#000',
                            fontSize: '1.1rem'
                            // fontWeight: 600
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

                        {/* TESTING WITH ENTRY ID */}
                        <div>
                          CURRENT ENTRY ID: {item.entryId}
                        </div>

                        <div className='justify-content-center'>

                          <div>
                            <i style={{
                              cursor: 'pointer'
                            }}
                              className="fa-regular fa-pen-to-square edit-button"
                              // onClick={this.props.editClick}
                              onClick={() => {
                                // this.editClicked();
                                this.props.editClick();
                                this.props.currentListing(item.entryId);
                                // console.log('ID: ', item.entryId);
                              }}
                              />
                          </div>

                        </div>

                      </div>
                    </div>
                  );
                })}

              </div>
              )
        }

      </div>
    );
  }

}
