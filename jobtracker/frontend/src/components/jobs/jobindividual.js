import React from 'react'
import axios from 'axios'



// const JobIndividual = ({ job_title, salary, post_url, resource_url, Address, id, job_status: { job_status }, companies }) => (

//   <div key={id}>
//     <h2 key={job_title}>{job_title}</h2>
//     <p key={salary}>{salary}</p>
//     <p key={post_url}>{post_url}</p>
//     <p key={resource_url}>{resource_url}</p>
//     {/* <p key={job_status}>{job_status}</p> */}




//   </div>
// )








class JobIndividual extends React.Component {

  constructor() {
    super()

    this.state = {
      job: null,
      companies: [],
      job_status: []
    }
  }

  componentDidMount() {
    const jobId = this.props.match.params.id

    axios.get(`/api/jobs/${jobId}`)
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.log(err))
  }

  render() {

    if (!this.state.job) return null
    if (!this.state.job.job_status) return null
    const { job, company, job_status } = this.state
    console.log(job)
    return (
      <>
        {/* job info  */}
        <div>
          <h2>{job.job_title}</h2>
          <p>{job.salary}</p>
          <p>{job.post_url}</p>
          <p>{job.resource_url}</p>


          {/* Job Status  */}
          <div>{job.job_status.job_status}</div>




          {/* nested company info */}
          <div>
            {job.company.map((comp, id) => (
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






        </div>








      </>


    )
  }
}

export default JobIndividual