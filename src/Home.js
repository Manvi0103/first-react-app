import React, { useState } from 'react';

const Home = ({ visits, onVisit }) => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>Home page visited {visits} times</p>
      <button onClick={onVisit}>Visit Home Page</button>
      <p>Display your Banner Id: B00917895</p>
    </div>
  );
};

export default Home;
