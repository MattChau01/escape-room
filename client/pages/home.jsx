import React from 'react';
import Header from '../components/header';
import SearchBar from '../components/search-bar';

import Gmaps from '../components/google-maps';
import HomeAccordion from '../components/accordion';

export default function Home(props) {
  return (
    <div>
      <Header />
      <SearchBar />
      <Gmaps />
      <HomeAccordion />
    </div>
  );
}
