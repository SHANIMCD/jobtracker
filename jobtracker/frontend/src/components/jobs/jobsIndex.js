import React from 'react'
import Axios from 'axios'


class JobsIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    Axios.get('/api/jobs')
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.jobs)
    const { companies } = this.state
    if (!this.state.jobs) return null
    return (
      <>
        <h1>
          Jobs
        </h1>

        <div className="job-container">
          {this.state.jobs.map(job => (
            <div className="job-individual" key={job.id}>
              <h2>{job.job_title}</h2>

              <p>Created at:</p>
            </div>
          ))}
        </div>

        {/* <div>
          {companies.map(comp => (
            <div key={comp.id}>
              {...comp}
              <p>{comp.company_name}</p>
            </div>
          ))}
        </div> */}



      </>


    )
  }


}

export default JobsIndex