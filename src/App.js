import React, { Component } from 'react';
import {
  Grid,
  Navbar,
  Jumbotron,
  Button
} from 'react-bootstrap';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

const App = () => (
  <div>
    <Grid>
      <Header />
    </Grid>
  </div>
);

export default App;
