import React from 'react';
import { Grid } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { browserHistory, Router, Route } from 'react-router'

import Header from './components/Header';
import Generator from './components/Generator';

const App = ({location}) => (
  <div>
    <div style={{width: '100%', height: 20, backgroundColor: '#EB1C22'}} />
    <Grid>
      <Header />
      <Generator location={location}/>
    </Grid>
  </div>
);

const Root = () => {
    return (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
    )
}

export default Root;
