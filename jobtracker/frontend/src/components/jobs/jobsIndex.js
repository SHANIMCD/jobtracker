import React from 'react'
import Axios from 'axios'
import Navbar from '../common/navbar'
import { Link } from 'react-router-dom'
// import AddAJob from './addAJob'
// import JobForm from './jobform'
import AddAJob from './addAJob'


class JobsIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      jobs: [],
      companies: [],
      job_status: 'All',
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
    // this.addJobOpen = this.addJobOpen.bind(this)
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


  // addJobOpen() {
  //   window.addEventListener('DOMContendLoaded', () => {
  //     const AddJobComponent = document.querySelector('.form-container')
  //     const AddAJob = document.querySelectorAll('.add-job-component > h1')

  //     AddAJob.addEventListener('click', () => {
  //       AddJobComponent.style.display = 'none'

  //     })
  //   })
  // }



  render() {
    // console.log(this.state.jobs)
    console.log(this.filteredJobs())
    // console.log(this.state.jobs.company[ company ] )
    if (!this.state.jobs) return null
    return (
      <>
        <header>
          <Navbar />
        </header>

        <h1>
          Jobs
        </h1>

        <div className="flex-job-components">
          <div>

            <div className="jobsearch-container" onChange={this.handleChange}>

              <input className="jobsearch-box"
                name="search"
                placeholder="Search by job title"
              ></input>

              <div className="filter-container" onChange={this.handleChange}>

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
                <Link to={`/jobs/${job.id}`}>
                  <h2>{job.job_title}</h2>


                  <div>
                    {job.companies.map((comp, id) => (
                      <>
                        <p key={id}>
                          {comp.company_name}
                        </p>
                      </>
                    ))
                    }
                  </div>




                  {/* <p>Created at: {job.created}</p> */}
                </Link> </div>)}</div>
          </div>

          <div className="add-job-component">

            <AddAJob
             
            />
          </div>
        </div>



      </>


    )
  }


}

export default JobsIndex