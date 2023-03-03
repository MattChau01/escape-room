import React from 'react';
// import HelloWorld from '../components/hello-world';
import Header from '../components/header';
import SearchBar from '../components/search-bar';
import Gmaps from '../components/google-maps';

export default function Home(props) {
  return (
    <div>
      {/* <HelloWorld /> */}
      <Header />
      <SearchBar />
      <Gmaps />
    </div>
  );
}
