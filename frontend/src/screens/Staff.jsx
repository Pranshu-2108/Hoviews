import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Staff = () => {
  return (
    <>
      <div className="row">
        <div>
          <Header />
        </div>
        <div className="col-md-2">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Staff