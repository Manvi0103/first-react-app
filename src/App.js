import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  const [visits, setVisits] = useState(0);

  const incrementVisits = () => {
    setVisits(visits + 1);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route>
          <Route path="/about">
            <About visits={visits} />
          </Route>
          <Route path="/contact">
            <Contact visits={visits} />
          </Route>
          <Route path="/">
            <Home visits={visits} onVisit={incrementVisits} />
          </Route>
        </Route>
      </div>
    </Router>
  );
}

export default App;
