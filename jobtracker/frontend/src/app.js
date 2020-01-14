import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Homepage from './components/common/Homepage'

const App = () => (

  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </main>
  </BrowserRouter>



)
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
