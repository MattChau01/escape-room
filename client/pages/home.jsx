import React from 'react';
import Header from '../components/header';
import SearchBar from '../components/search-bar';
// import Gmaps from '../components/google-maps';
import HomeAccordion from '../components/accordion';
import Carousel from '../components/carousel';

export default function Home(props) {
  return (
    <div>
      <Header />
      <SearchBar />
      {/* <Gmaps /> */}
      <Carousel />
      <HomeAccordion />
    </div>
  );
}
