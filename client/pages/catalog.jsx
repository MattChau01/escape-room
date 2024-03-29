import React from 'react';
import Header from '../components/header';
import ListingsOverview from '../components/listings-overview';

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null
    };
  }

  componentDidUpdate() {

    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('/api/listings/catalog', req)
      .then(res => res.json())
      .then(listings => {
        this.setState({
          listings
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>

        <Header
          participants={this.props.participants}
          routeVSignin={this.props.routeVSignin}
          toHome={this.props.toHome}
          aboutUs={this.props.aboutUs} />
        <div className='text-center mt-3'>

          <div className='mt-3 mb-3'>

            <h5>
              Click on the room name to learn more!
            </h5>

            {this.props.listings.map(item => {
              return (

                <ListingsOverview key={item.entryId} item={item}/>

              );
            })}

          </div>
        </div>
      </div>
    );
  }
}
