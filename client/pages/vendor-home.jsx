import React from 'react';

export default class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isclicked: false
    };
  }

  render() {
    return (
      <div className='text-center mt-5'>
        LOGIN SUCCESSFUL!
      </div>
    );
  }

}
