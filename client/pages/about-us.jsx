import React from 'react';
import Header from '../components/header';

export default function AboutUs(props) {
  return (
    <>
      <Header participants={props.participants} routeVSignin={props.routeVSignin} toHome={props.toHome} aboutUs={props.aboutUs} />
      <div className='mt-4'>
        <div className='container'>

          <div className='d-flex row justify-content-center'>
            <h2>
              About us
            </h2>
          </div>

          <div className='mt-3 d-flex row justify-content-center text-center'>
            Escape Rooms are a fun activity for small to large groups. There are a vast variety of themes across the globe.
            This team is based in Orange County, California. Within Orange County alone, there over 10 locations with different rooms to choose from respectively.
            The next popular city with escape rooms is Los Angeles. Here you could also find a huge variety of escape rooms from multiple locations.
          </div>

          <div className='mt-3 d-flex row justify-content-center text-center'>
            This page started off as a fun side project. The idea was to create an online catalog of escape rooms that can be viewed by all visitors.
          </div>

          <div className='mt-5 d-flex row justify-content-center'>
            <a className='github' href='https://github.com/MattChau01/escape-room' target='_blank' rel="noreferrer">
              <i className="fa-brands fa-github" style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#000' }} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
