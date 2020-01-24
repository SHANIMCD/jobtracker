import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import Navbar from '../common/navbar'


class Login extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''

      }
    }
    this.handlechange = this.handlechange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handlechange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    console.log('this be data', data)
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.setState({ username: res.data.name })
        console.log('Come on in', res.data)
        this.props.history.push('/jobs')
      })
  }


  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <h2 className="login-form-header">
          Log in:
        </h2>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder=" Email"
              name="email"
              onChange={this.handlechange}
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handlechange}
            />
            <button>Log In</button>

          </form>

        </div>


      </>

    )
  }
}

export default Login