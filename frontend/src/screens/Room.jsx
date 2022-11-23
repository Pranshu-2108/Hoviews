import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Room = () => {
  return (
    <>
      <div className="row">
        <div>
          <Header />
        </div>
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 p-2">
          <div className="row">
            <ol className="breadcrumb">
              <li><a href="#home">
                <em className="fa fa-home"> </em>
              </a></li>
              <li className="active">/ Manage Rooms</li>
            </ol>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
              <div id="success"></div>
          </div>
        </div>

        

      </div>
    </>
  )
}

export default Room