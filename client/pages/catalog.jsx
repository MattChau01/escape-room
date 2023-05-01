import React from 'react';
import Header from '../components/header';
import ListingsOverview from '../components/listings-overview';

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      roomNumber: undefined
    };
    // this.fetchListing = this.fetchListing.bind(this);
  }

  // fetchListing(event) {
  //   console.log('TEST ');
  //   console.log('target: ', props.item.entryId);
  //   console.log('state in function: ', this.state.listings);
  //   console.log('e: ', event.target.value);

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
      <div>

        {/* HEADER */}
        <Header participants={this.props.participants} routeVSignin={this.props.routeVSignin} toHome={this.props.toHome} />

        <div className='text-center mt-3'>

          {/* TESTING BUTTON */}
          {/* <p style={{ cursor: 'pointer' }} onClick={this.fetchListing}>TEST</p> */}

          {/* TRY MAPPING */}
          <div className='mt-3 mb-3'>

            <h5>
              Click on the room name to learn more!
            </h5>

            {this.state.listings.map(item => {
              console.log('item: ', item); //eslint-disable-line
              return (

                <ListingsOverview key={item.entryId} item={item} />

              );
            })}

          </div>
        </div>
      </div>
    );
  }
}
