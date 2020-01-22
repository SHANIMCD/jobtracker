import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../src/style.scss'

import Homepage from './components/common/Homepage'

import JobIndex from './components/jobs/jobsIndex'

import Login from './components/auth/login'
import Register from './components/auth/register'

const App = () => (

  <BrowserRouter>
    <main>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jobs/" component={JobIndex} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </main>
  </BrowserRouter>



)
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
