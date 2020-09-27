import React, { Component } from 'react';
import { DashboardFilled } from '@ant-design/icons';

class Navbar extends Component {
  render() {
    return (
      <div style={{ color: '#f4f4f4', fontSize: '25px' }}>
        <p style={{}}>
          <DashboardFilled />
          <span>StopWatch</span> <span>&</span> <span>Timer</span>
          <DashboardFilled />
        </p>
      </div>
    );
  }
}

export default Navbar;
