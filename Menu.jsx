import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="container text-center" style={{ minWidth: '100vw' }}>
      <div className="d-flex justify-content-around">
        <Link to="/stopwatch" className="btn btn-dark my-5 ">
          StopWatch
        </Link>

        <Link to="/timer" className="btn btn-success my-5">
          Timer
        </Link>
      </div>
    </div>
  );
};
export default Menu;
