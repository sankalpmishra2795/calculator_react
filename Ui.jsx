import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './Menu';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

import { Layout } from 'antd';

const { Header } = Layout;
class Ui extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header style={{ color: '#fff', textAlign: 'center' }}>
            <Navbar />
          </Header>

          <Menu />
          <Route exact path="/stopwatch" component={Stopwatch} />
          <Route exact path="/timer" component={Timer} />
        </Layout>
      </Router>
    );
  }
}

export default Ui;
