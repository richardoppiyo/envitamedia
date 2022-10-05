import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './landing.css';
import LandingImg from './Landing.svg';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <h1>
          Imagine if
          {' '}
          <span className="spannedh1">Snapchat</span>
          {' '}
          had events.
        </h1>
        <p className="homep1">Easily host and share events with your friends across any socila media.</p>
        <div>
          <img className="landingimage" src={LandingImg} alt="img" />
          {/* <LandingImg /> */}
          {/* <h2>Image here</h2>
      <div>
        <h4>Movie Night</h4>
        <p>
          Hosted by
          {' '}
          <strong>Elysia</strong>
        </p>
      </div>
      <div>
        <p>14 responses</p>
        <p>See guests</p>
        <button type="submit">invite</button>
      </div>
      <ul>
        <li><p>18 August 6PM</p></li>
        <li><p>Street Name</p></li>
        <li><p>Links</p></li>
      </ul> */}
        </div>
        {/* <button className="homebtn" type="submit"><span>Create my events</span></button> */}
        <Button className="homebtn" type="button" onClick={() => navigate('create')}>
          <span>Create my events</span>
        </Button>
      </div>
    </>
  );
};

export default Landing;
