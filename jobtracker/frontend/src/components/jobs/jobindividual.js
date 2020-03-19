import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../common/navbar'


class JobIndividual extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {
        job_status: {
          job_status: 'All'
        }
      },
      job: null,
      companies: [],
      job_status: 'All'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const jobId = this.props.match.params.id

    axios.get(`/api/jobs/${jobId}`)
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.log(err))
  }


  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })

  }

  filterDropdown() {
    if (this.state.job_status === 'All') {
      return this.state.job_status
    }
    return (this.state.job_status)
  }



  render() {

    if (!this.state.job) return null
    if (!this.state.job.job_status) return null
    const { job } = this.state
    console.log(job)
    return (

      <>

        <header>
          <Navbar />
        </header>




        {/* job info  */}
        <div className="showpage-render">
          <div className="showpage-title">
            <h2>{job.job_title}</h2>

            <div className="showpage-company-title">
              {job.companies.map((comp, id) => (
                <>
                  <p key={id}>
                    {comp.company_name}
                  </p>
                </>
              ))}
            </div>

          </div>

          <div className="show-page-body">

            <p>Salary: £{job.salary}</p>
            <p>Company Website: {job.post_url}</p>
            <p>Job post/resource link: {job.resource_url}</p>
            <div className="description-container">
              <h4>
                Description/Notes:
              </h4>
              <p className="show-page-description">{job.Description}</p>
            </div>
            




            {/* Job Status  */}
            <h3>Application status: {job.job_status.job_status}</h3>




            {/* nested company info */}
            <div>
              {job.companies.map((comp, id) => (
                <>
                  <p key={id}>
                    {comp.company_name}
                  </p>
                  <p>
                    {comp.Address}
                  </p>
                  <p>
                    {comp.Industry}
                  </p>
                </>
              ))
              }
            </div>
            <button><Link to={`/jobs/${job.id}/edit`}>Edit</Link></button>
            <button>Delete</button>

          </div>
        </div>








      </>


    )
  }
}

export default JobIndividual



