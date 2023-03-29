import React from 'react';
import Home from './pages/home';
import ParseRoute from '../client/lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash)
    };
    this.currentPage = this.currentPage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: ParseRoute(window.location.hash)
      });
    });
  }

  currentPage() {
    const { path } = this.state.route;
    if (path === '') {
      return (
        <Home />
      );
    }
  }

  render() {
    // return <Home />;

    return (
      <div>
        {this.currentPage()}
      </div>
    );
  }
}
