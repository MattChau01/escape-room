import React from 'react';
import Header from '../components/header';

export default class EditRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Header
          participants={this.props.participants}
          routeVSignin={this.props.routeVSignin}
          toHome={this.props.toHome} />
        <div className='mt-3 ml-3'>
          <a
            className='back'
            style={{
              cursor: 'pointer'
            }}
            onClick={this.props.vendorHome}>Back to listings</a>
        </div>
        <div className='text-center mt-5'>
          EDIT FORM
        </div>
      </>
    );
  }

}
