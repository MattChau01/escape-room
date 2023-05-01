import React from 'react';

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    // console.log('CATALOG PAGE');
  }

  render() {
    return (
      <div className='text-center mt-5'>
        TEST
      </div>
    );
  }
}
