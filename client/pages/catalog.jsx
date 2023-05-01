import React from 'react';

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
    // this.fetchListings = this.fetchListings.bind(this);
  }

  // fetchListings() {
  //   console.log('TEST ');

  //   console.log('state in function: ', this.state.listings);

  // }

  componentDidMount() {
    // console.log('CATALOG PAGE');
    // this.fetchListings();

    fetch('/api/listings')
      .then(res => res.json())
      .then(listings => {
        // console.log('list of listings: ', listings);
        this.setState({
          listings
        });
      })
      .catch(err => console.error(err));

    // console.log('this.state.listings: ', this.state.listings);

    // this.fetchListings();

  }

  render() {
    return (
      <div className='text-center mt-5'>
        TEST

        {/* TRY MAPPING */}
        <div className='mt-3 mb-3'>

          {

          this.state.listings.map(item => {
            console.log('item: ', item); //eslint-disable-line
            return (
              <div key={item.entryId} className='catalog-container'>
                {/* TEST STYLING, NOT PERMANENT */}
                <div className='mt-3' style={{
                  backgroundColor: '#ececec',
                  width: '18rem',
                  height: '16rem'
                }}>

                  <div>
                    {/* {item.entryId} */}
                    <h5 className='row justify-content-center py-2'>
                      {item.roomName}
                    </h5>
                    <img src={item.imageUrl} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }}/>
                    <div className='row py-2'>

                      <div className='col'>
                        {/* ADD HASH ROUTING ACCORDING TO THE ENTRY ITEM */}
                        Learn more
                      </div>

                      <div className='col'>
                        Price here
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })

        }

        </div>

      </div>
    );
  }
}
