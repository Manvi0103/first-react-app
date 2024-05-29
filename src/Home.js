import React from 'react';

const Home = ({ visits, onVisit }) => {
    React.useEffect(() => {
        onVisit();
    }, [onVisit]);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>Home page visited {visits} times</p>
      <p>Banner Id: B00917895</p>
    </div>
  );
};

export default Home;
