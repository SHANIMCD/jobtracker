import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../lib/auth'


class Navbar extends React.Component {

  constructor() {
    super()

    this.state = { navOpen: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggleNavbar() {
    this.setState({ navOpen: !this.state.navOpen })
  }

  handleLogout() {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navOpen: false })
    }
  }



  render() {
    return (

      <>
        <nav className="nav-container">
          
          <a 
            className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div className={`navbar-menu ${this.state.navOpen ? 'is-active' : ''}`}>
            
            
            <Link className="nav-button" to="/">Home</Link>
            <Link className="nav-button" to="/jobs">Jobs</Link>
            {!Auth.isAuthenticated() && <Link className="nav-button" to="/register">Register</Link>}
            {!Auth.isAuthenticated() && <Link className="nav-button" to="/login">Login</Link>}
            {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="nav-button">Logout</a>}
            
          </div>
        </nav>

      </>

    )
  }
}

export default withRouter(Navbar)