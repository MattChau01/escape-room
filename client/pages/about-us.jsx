import React from 'react';
import Header from '../components/header';

export default function AboutUs(props) {
  return (
    <>
      <Header participants={props.participants} routeVSignin={props.routeVSignin} toHome={props.toHome} aboutUs={props.aboutUs} />
      <div className='mt-4 pl-2'>
        <div className='container'>

          <div className='d-flex row justify-content-center'>
            <h3>
              About us
            </h3>
          </div>

          <div className='mt-3 d-flex row justify-content-center '>
            Escape rooms are a fun activity for small to large groups.
            It&apos;s an activity that will exercise a group&apos;s communication skills and trust.
            There are a vast variety of themes across the globe: from adventure, mystery, horror, pop culture, tv/movies, and many more!
            This team is based in Orange County, California.
            Within Orange County alone, there over 10 locations with different rooms to choose from.
            The popularity of escape rooms have been increasing, and there are plenty of options available.
            The idea was to create an online catalog of escape rooms that can be viewed by all visitors.
          </div>

          <div className='mt-3 d-flex row justify-content-center '>
            The developer behind this project is Matthew. Based in Orange County, Matthew is a full stack software developer with a Bachelor&apos;s degree
            from the California State University of Long Beach. He also received certification from a full stack development program
            in Irvine called LearningFuze. Matthew has participated in 19 escape rooms! Cities that he participated in are San Diego, Los Angeles, Orange County, Torrance, and Cerritos.
            This goes to show that escape rooms are growing in popularity across different cities!
          </div>

          <div className='mt-3 d-flex row justify-content-center '>
            Click the link below if you would like to connect with Matthew!
          </div>

          <div className='mt-5 d-flex row justify-content-center'>
            <a className='github' href='https://github.com/MattChau01/' target='_blank' rel="noreferrer">
              <i className="fa-brands fa-github" style={{ fontSize: '1.5rem', cursor: 'pointer', color: '#000' }} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
