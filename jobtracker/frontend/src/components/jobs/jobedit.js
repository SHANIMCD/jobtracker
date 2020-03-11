import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
// import JobIndividual from './jobindividual'
import JobForm from './jobform'
// import AddAJob from './addAJob'

class EditJob extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        job_title: '',
        salary: '',
        post_url: '',
        resource_url: '',
        Description: '',
        job_status: {
          job_status: ''
        },
        companies: [{
          company_name: '',
          Address: '',
          Industry: ''
        }]
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const jobId = this.props.match.params.id
    axios.get(`/api/jobs/${jobId}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log('changes made')
    const jobId = this.props.match.params.id
    axios.put(`/api/jobs/${jobId}/`, this.state.data, {
    //   headers: { Authorization: `Bearer ${Auth.getToken()}` 
    // }
    })
      .then(res => {
        this.props.history.push(`/jobs/${res.data.id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    // if (!this.state.job) return null
    return (
      <>
        <h1>edit</h1>

        <JobForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />

      </>
    )
  }


}

export default EditJob