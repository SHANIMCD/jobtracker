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
    this.addClass = this.addClass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    console.log('changes')
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  addClass() {
    console.log('clicked')
    const classes = [...this.state.data.classes, {} ]
    this.setState({ data: { ...this.state.data, classes } })
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


  openForm() {
    document.getElementById('.form-container').style.display = 'block'
  }

  closeForm() {
    document.getElementById('.form-container').style.display = 'none'
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
                name="Job Status"
                value={this.state.data.job_status}
                onChange={this.onChange}
                placeholder="Job Status"
              >
                <option>Select a Job Status</option>
                <option>Listed Application</option>
                <option>Speculative Application</option>
                <option>Interview</option>
                <option>Code Test</option>
                <option>Offer</option>
                <option>Rejection</option>
              </select>
              {this.state.data.companies.map((_comp, index) => {
                return (
                  <div className="subform-container" key={index}>
                    <h6>Add Company</h6>
                    <input
                      name="company_name"
                      value={_comp.company_name}
                      placeholder="Company Name"
                    />
                    <textarea
                      name="Address"
                      value={_comp.Address}
                      placeholder="Address"
                    />
                    <input
                      name="Industry"
                      value={_comp.Industry}
                      placeholder="Industry"
                    />
                    <button className="subform-button">Add another company</button>
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

