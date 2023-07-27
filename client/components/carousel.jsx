import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.autoScroll = this.autoScroll.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }

  componentDidMount() {
    this.autoScroll();
  }

  autoScroll() {
    this.timer = setInterval(() => {
      if (this.state.count === 3) {
        this.setState({ count: 0 });
      } else {
        this.setState({ count: this.state.count + 1 });
      }
    }, 3500);
  }

  prevImg() {
    if (this.state.count === 0) {
      this.setState({ count: 3 });
    } else if (this.state.count <= 3) {
      this.setState({ count: this.state.count - 1 });
    }

    clearInterval(this.timer);
    this.autoScroll();
  }

  nextImg() {
    if (this.state.count === 3) {
      this.setState({ count: 0 });
    } else if (this.state.count >= 0) {
      this.setState({ count: this.state.count + 1 });
    }

    clearInterval(this.timer);
    this.autoScroll();
  }

  render() {
    return (
      <div style={{ overflow: 'hidden', marginTop: '-1rem', position: 'relative' }}>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='row justify-between'>
            <div style={{
              position: 'absolute',
              left: '0'
            }}>
              <div>
                <button className='carousel-arrows' onClick={this.prevImg} >
                  &lt;
                </button>
              </div>
            </div>
            <div className='home-carousel'>
              <img src={this.props.images[this.state.count].img} className='home-carousel-img' />
            </div>
            <div style={{
              position: 'absolute',
              right: '0'
            }}>
              <div>
                <button className='carousel-arrows' onClick={this.nextImg}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
