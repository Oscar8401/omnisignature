import React from 'react'
import { Grid } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { browserHistory, Router, Route } from 'react-router'

import Header from './components/Header'
import Signature from './components/Signature'
import { ColorStripe } from './components/ColorStripe'

const App = ({location}) => (
  <div>
    <ColorStripe />

    <Grid>
      <Header />
      <Signature location={location} />
    </Grid>

  </div>
)

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  )
}

export default Root
