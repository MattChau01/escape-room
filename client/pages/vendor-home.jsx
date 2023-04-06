import React from 'react';

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isclicked: false
    };
  }

  render() {

    // console.log('vendor home page');
    // console.log('value of isAuthorizing: ', this.props.isAuthorizing);

    return (
      <div className='text-center mt-5'>
        LOGIN SUCCESSFUL!
      </div>
    );
  }

}
