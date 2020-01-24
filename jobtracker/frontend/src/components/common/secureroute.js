import React from 'react'
import Auth from '../lib/auth'
import { Route, Redirect } from 'react-router-dom'

const SecureRoute ({ component: Component, ...rest}) => {
if (Auth.isAuthenticated()) return <Route {...rest} component={Component}/>
Auth.logout()
return <Redirect to="login"/>
}

export default SecureRoute