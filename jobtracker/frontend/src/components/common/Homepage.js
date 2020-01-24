import React from 'react'
import Navbar from '../common/navbar'



class Homepage extends React.Component {


  render() {
    return (
      <>

        <div>
          <header>
            <Navbar />
          </header>
          <section className="homepage">
            <h1>
              Track Your Jobs
            </h1>
          </section>

        </div>
      </>
    )
  }
}

export default Homepage