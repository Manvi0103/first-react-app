import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Layout from './layout.js';

function App() {
  const [visits, setVisits] = useState(0);

  const onVisit = () => {
    setVisits(visits + 1);
  };

  return (
    <div> 
        <Routes>
          <Route path="/" element = { <Layout/> }>
          <Route index path="/" element = { <Home visits={visits} onVisit={onVisit} /> }>
          </Route> 
          <Route path="about" element = { <About visits={visits} /> }>
          </Route>
          <Route path="contact"  element = { <Contact visits={visits} /> }>
          </Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
