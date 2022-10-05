import React from 'react';

const Landing = () => (
  <div>
    <h1>Imagine if snapchat had events</h1>
    <p>Easily host and share events with your friends across any socila media.</p>
    <div>
      <h2>Image here</h2>
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
      </ul>
    </div>
    <button type="submit">Create my events</button>
  </div>
);

export default Landing;
