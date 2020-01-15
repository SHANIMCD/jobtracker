import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../src/style.scss'

import Homepage from './components/common/Homepage'

import JobIndex from './components/jobs/jobsIndex'

const App = () => (

  <BrowserRouter>
    <main>
      <Switch>
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
