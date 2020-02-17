import React from 'react'

const JobForm = ({ data, handleChange, handleSubmit, companies: [{ company_name, Address, Industry }], errors }) => (
  <div className="form-container">
    <form
      onSubmit={handleSubmit}>
      <input
        name="job_title"
        value={data.job_title}
        onChange={handleChange}
        placeholder="Job Title"
      />
      <input
        name="salary"
        value={data.salary}
        onChange={handleChange}
        placeholder="Salary"
      />
      <input
        name="post_url"
        value={data.post_url}
        onChange={handleChange}
        placeholder="Post URL"
      />
      <input
        name="resource_url"
        value={data.resource_url}
        onChange={handleChange}
        placeholder="Resource URL"
      />
      <textarea
        name="Description"
        value={data.Description}
        onChange={handleChange}
        placeholder="Description"
      />
      <select
        name="job_status"
        value={data.job_status}
        onChange={handleChange}
        placeholder="Job Status"
      >
        <option onChange={handleChange} value="All">Select a Job Status</option>
        <option onChange={handleChange} value="Listed Application">Listed Application</option>
        <option onChange={handleChange} value="Speculative Application">Speculative Application</option>
        <option onChange={handleChange} value="Interview">Interview</option>
        <option onChange={handleChange} value="Code Test">Code Test</option>
        <option onChange={handleChange} value="Offer">Offer</option>
        <option onChange={handleChange} value="Rejection">Rejection</option>
      </select>
      {data.companies.map((_comp, index) => {
        return (
          <div className="subform-container" key={index}>
            <h6>Add Company</h6>
            <div>
              <label className="label">Company Name</label>
              <input
                onChange={handleChange}
                name="company_name"
                value={_comp.company_name}
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="label">Address</label>
              <textarea
                onChange={handleChange}
                name="Address"
                value={_comp.Address}
                placeholder="Address"
              />
            </div>

            <div>
              <label className="label">Industry</label>
              <input
                onChange={handleChange}
                name="Industry"
                value={_comp.Industry}
                placeholder="Industry"
              />
            </div>

          </div>
        )
      })}
      <button type="submit">Submit</button>

    </form>
  </div>

)
export default JobForm