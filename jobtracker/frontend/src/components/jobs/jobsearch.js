import React from 'react'



class JobSearch extends React.Component {

  constructor() {
    super()
    this.state = {
      jobs: [],
      search: ''
    }
  }



  render() {
    return (
      <div className="jobsearch-container">

        <input className="jobsearch-box"
          name="search"
          placeholder="Search by job title"
        ></input>
        <div className="filter-container">
          <p>Filter by Job Status</p>
          <select>
            <option>All</option>
            <option>Listed Application</option>
            <option>Speculative Application</option>
            <option>Code Test</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <div className="filtered">{this.state.filteredJobs().map(job => <div key={job.job_title} {...job} />)}

          </div>

        </div>
      </div>

    )
  }
}

export default JobSearch