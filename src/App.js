// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './src/Home';
import About from './src/About';
import Contact from './src/Contact';

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

        <Switch>
          <Route path="/about">
            <About visits={visits} />
          </Route>
          <Route path="/contact">
            <Contact visits={visits} />
          </Route>
          <Route path="/">
            <Home visits={visits} onVisit={incrementVisits} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
