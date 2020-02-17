import React from 'React'
import axios from 'axios'
import Auth from '../lib/auth'


class AddAJob extends React.Component {

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
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.addCompany = this.addCompany.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    console.log('changes')
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  addCompany() {
    console.log('add comp clicked')
    const companies = [...this.state.data.companies, {}]
    this.setState({ data: { ...this.state.data, companies } })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('sent')
    console.log()
    axios.post('/api/jobs', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.props.history.push(`/jobs/${res.data.id}`)
      })
      .catch(err => console.log(err.message))
  }



  render() {
    return (
      <>
        <h1>
          Add Job
        </h1>

        <div className="form-container">
          <form onChange={this.handleChange}
            data={this.state.data}
            onSubmit={this.handleSubmit}>
            <input
              name="job_title"
              value={this.state.data.job_title}
              placeholder="Job Title"
            />
            <input
              name="salary"
              value={this.state.data.salary}
              placeholder="Salary"
            />
            <input
              name="post_url"
              value={this.state.data.post_url}
              placeholder="Post URL"
            />
            <input
              name="resource_url"
              value={this.state.data.resource_url}
              placeholder="Resource URL"
            />
            <textarea
              name="Description"
              value={this.state.data.Description}
              placeholder="Description"
            />
            <select
              name="job_status"
              value={this.state.data.job_status}
              onChange={this.onChange}
              placeholder="Job Status"
            >
              <option value="All">Select a Job Status</option>
              <option value="Listed Application">Listed Application</option>
              <option value="Speculative Application">Speculative Application</option>
              <option value="Interview">Interview</option>
              <option value="Code Test">Code Test</option>
              <option value="Offer">Offer</option>
              <option value="Rejection">Rejection</option>
            </select>
            {this.state.data.companies.map((_comp, index) => {
              return (
                <div className="subform-container" value={this.state.data.companies}  key={index}>
                  <h6>Add Company</h6>
                  <input
                    onChange={this.handleChange}
                    name="company_name"                    
                    // value={_comp.company_name}
                    placeholder="Company Name"
                  />
                  <textarea
                    onChange={this.handleChange}
                    name="Address"
                    // value={_comp.Address}
                    placeholder="Address"
                  />
                  <input
                    onChange={this.handleChange}
                    name="Industry"                   
                    // value={_comp.Industry}
                    placeholder="Industry"
                  />
                  <button onClick={this.addCompany} className="subform-button">Add another company</button>
                </div>
              )
            })}
            <button>Submit</button>

          </form>


        </div>

      </>

    )
  }
}

export default AddAJob

