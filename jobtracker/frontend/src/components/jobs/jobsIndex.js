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
    return (
      <>
        <h1>
          Index Page
        </h1>

        {/* <div className="job-container">
          {this.state.jobs.map(job => ( <div key={job.id}> {...job}</div>))}

        </div> */}
        
      </>


    )
  }


}

export default JobsIndex