import React from 'react'
import Axios from 'axios'
// import JobSearch from '../jobs/jobsearch'


class JobsIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      jobs: [],
      job_status: 'All',
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    Axios.get('/api/jobs')
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err))
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  filteredJobs() {
    const { search, jobs } = this.state
    const re = new RegExp(search, 'i')
    const filtered = jobs.filter(job => {
      return re.test(job.job_title)
    })
    return this.filterDropdown(filtered)
  }

  filterDropdown(array) {
    if (this.state.job_status === 'All') {
      return array
    }
    return array.filter(stat => stat.job_status.job_status === this.state.job_status)
  }



  render() {
    // console.log(this.state.jobs)
    console.log(this.filteredJobs())
    if (!this.state.jobs) return null
    return (
      <>
        <h1>
          Jobs
        </h1>

        <div className="jobsearch-container" onChange={this.handleChange}>

          <input className="jobsearch-box"
            name="search"
            placeholder="Search by job title"
          ></input>

          <div className="filter-container" onChange={this.handleChange}>
            <p>Filter by Job Status</p>
            <select onChange={this.handleChange} name="job_status">
              <option value="All">All</option>
              <option value="Listed Application">Listed Application</option>
              <option value="Speculative Application">Speculative Application</option>
              <option value="Code Test">Code Test</option>
              <option value="Interview stage 1">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejection">Rejected</option>
            </select>
          
          </div>
        </div>
          <div className="job-container">{this.filteredJobs().map(job =>
            <div className="job-individual" key={job.id}>
              <h2>{job.job_title}</h2>
              <p>Created at: {job.created}</p>
            </div>)}</div>



        {/* <div className="job-container">
          {this.state.jobs.map(job => (
            <div className="job-individual" key={job.id}>
              <h2>{job.job_title}</h2>

              <p>Created at: {job.created}</p>
            </div>
          ))}
        </div> */}


      </>


    )
  }


}

export default JobsIndex