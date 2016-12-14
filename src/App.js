import React from 'react';
import { Grid } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Generator from './components/Generator';

const App = () => (
  <div>
    <Grid>
      <Header />
      <Generator />
    </Grid>
  </div>
);

export default App;
