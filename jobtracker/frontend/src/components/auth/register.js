import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'



class Register extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {
        // username: '',
        // email: '',
        // password: '',
        // passwordConfirmation: ''
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
    axios.post('/api/register', this.state.data )
      .then(() => this.props.history.push('/login'))
      .catch(err => console.log( err.message ))
    
  }


  render() {
    return (
      <>
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-container">
            <input
              onChange={this.handlechange}
              placeholder="Create a username"
              name="username"
              type="text"
            >
            </input>
            <input
              onChange={this.handlechange}
              placeholder="Enter Email Address"
              name="email"
              type="email"
            >
            </input>

            <input
              onChange={this.handlechange}
              placeholder="Enter Password"
              name="password"
              type="password"
            >
            </input>

            <input
              onChange={this.handlechange}
              placeholder="Confirm Password"
              name="password_confirmation"
              type="password"
            >
            </input>

            <button>Submit</button>

          </div>

        </form>

      </>

    )
  }
}

export default Register