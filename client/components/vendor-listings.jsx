import React from 'react';

export default class VendorListings extends React.Component {

  render() {

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
                      <div className='mt-3' style={{
                        backgroundColor: '#ececec',
                        width: '21.25rem',
                        height: '100%'
                      }}>

                        <div>
                          <div className='row justify-content-center py-2' style={{
                            color: '#000',
                            fontSize: '1.1rem'
                          }}>
                            {item.roomName}
                          </div>
                          <div className='row justify-content-center'>
                            <img src={item.imageUrl} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }} />
                          </div>
                        </div>

                        <div className='row py-3'>

                          <div className='col'>
                            Difficulty: {item.difficulty}
                          </div>

                          <div className='col'>
                            ${Number(item.price)} /person
                          </div>

                        </div>

                        <div className='justify-content-center pb-3'>

                          <div>
                            <i style={{
                              cursor: 'pointer'
                            }}
                              className="fa-regular fa-pen-to-square edit-button"
                              onClick={() => {
                                this.props.editClick();
                                this.props.currentListing(item.entryId);
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
