import React from 'react';
// import HelloWorld from '../components/hello-world';
import Header from '../components/header';
import SearchBar from '../components/search-bar';

export default function Home(props) {
  return (
    <div>
      {/* <HelloWorld /> */}
      <Header />
      <SearchBar />
    </div>
  );
}
