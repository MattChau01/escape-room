import React from 'react';

class VendorSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      passwordConfirmed: ''
    };
  }

  render() {
    return (
      <div>
        SIGN UP
      </div>
    );
  }
}

export default VendorSignup;
