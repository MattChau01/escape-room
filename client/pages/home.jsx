import React from 'react';
// import HelloWorld from '../components/hello-world';
import Header from '../components/header';
import SearchBar from '../components/search-bar';
import Gmaps from '../components/google-maps';
import HomeAccordion from '../components/accordion';

export default function Home(props) {
  return (
    <div>
      {/* <HelloWorld /> */}
      <Header />
      <SearchBar />
      <Gmaps />
      <HomeAccordion />
    </div>
  );
}
