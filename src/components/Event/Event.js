import React from 'react';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';
import './event.css';
// import { FaBeer } from 'react-icons/fa';
import { IoCalendarNumberOutline, IoLocationOutline } from 'react-icons/io5';
import Birthdayimg from './Birthday.png';

const Event = () => (
  <div className="eventpage">
    <img className="eventimage" src={Birthdayimg} alt="img" />
    <div className="eventdetails">
      {/* <div> */}
      <h2>Birthday Bash</h2>
      <p className="eventhost">
        Hosted by
        {' '}
        <strong>Elysia</strong>
      </p>
      <ul>
        <li>
          {/* <p>hi</p> */}
          <IoCalendarNumberOutline className="eventicon" />
          <div className="eventli">
            <p>18 AUG 6:00PM</p>
            <p>to 19 August 1:00PM UTC +10</p>
          </div>
        </li>
        <li>
          <IoLocationOutline className="eventicon" />
          <div className="eventli">
            <p>Street name</p>
            <p>Surbub, Stte, Postcode</p>
          </div>
        </li>
      </ul>
      {/* </div> */}
    </div>
  </div>
);
export default Event;
