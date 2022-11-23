import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

const Reservation = () => {

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const [types, setTypes] = useState([]);
  const [roomsForType, setRoomsForType] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/reservation')
      data.push({ room_type: "Select Room Type" })
      setTypes(data);
      //console.log(data)
    }
    fetchData();
  }, [])

  var Difference_In_Time = new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

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
              <li className="active">/ Reservation</li>
            </ol>
          </div>

          <div className="row pe-4 ps-2 py-2">
            <div className="col-md-12">
              <form id="booking" data-toggle="validator">
                <div className="response"></div>
                <div className="col-md-12">

                  <div className="panel panel-default">
                    <div className="panel-heading">Room Information:
                      {/* <a className="btn btn-secondary pull-right" href="">Replan Booking</a> */}
                    </div>
                    <div className="panel-body row">
                      <div className="form-group col-md-6 p-2">
                        <label className="p-2">Room Type</label>
                        <select className="form-control" id="room_type" data-error="Select Room Type" onChange={async (e) => {
                          // console.log(e.target.value)
                          const typeId = types.find((item) => item.room_type === e.target.value)
                          const { data } = await axios.get('/api/getRooms', {
                            params: { room_type_id: typeId.room_type_id }
                          })
                          setRoomsForType(data)

                        }} required>

                          {types.map((type) => {
                            if (type.room_type === "Select Room Type") {
                              return <option selected disabled value="">{type.room_type}</option>
                            }
                            else {
                              return <option selected value={`${type.room_type}`}
                              >{type.room_type}</option>
                            }
                          })}

                        </select>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 p-2">
                        <label className="p-2">Room No</label>
                        <select className="form-control" id="room_no" onChange={() => {

                        }} required data-error="Select Room No">
                          {
                            (
                              roomsForType.map((item, index) => (
                                <option selected key={index}>{item.room_no}</option>
                              ))
                            )}
                            <option selected disabled>Select Room No</option>
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6">
                        <label className="p-2">Check In Date</label>
                        <input type="date" className="form-control" placeholder="mm/dd/yyyy" id="check_in_date" data-error="Select Check In Date" onChange={e=>setCheckInDate(e.target.value)} required></input>
                      </div>

                      <div className="form-group col-lg-6">
                        <label className="p-2">Check Out Date</label>
                        <input type="date" className="form-control" placeholder="mm/dd/yyyy" id="check_out_date" data-error="Select Check Out Date" onChange={e=>setCheckOutDate(e.target.value)} required></input>
                        <div className="help-block with-errors"></div>
                      </div>
                    
                      <div className="col-lg-10 pt-3 pb-2">
                        <h5 style={{ fontWeight: 'bold' }}>Total Days : <span id="staying_day">{Difference_In_Days}</span> Days</h5>
                        {console.log(roomsForType)}

                        <h5 style={{ fontWeight: 'bold' }}>Price: <span id="price">{}</span>{roomsForType[0].price} /-</h5>
                        <h5 style={{ fontWeight: 'bold' }}>Total Amount : <span id="total_price">0</span> /-</h5>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="panel panel-default">
                    <div className="panel-heading">Customer Detail:</div>
                    <div className="panel-body row">
                      <div className="form-group col-lg-6">
                        <label className="p-2">First Name</label>
                        <input className="form-control" placeholder="First Name" id="first_name" data-error="Enter First Name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-lg-6">
                        <label className="p-2">Last Name</label>
                        <input className="form-control" placeholder="Last Name" id="last_name" />
                      </div>

                      <div className="form-group col-lg-6">
                        <label className="p-2">Contact Number</label>
                        <input type="number" className="form-control" data-error="Enter Min 10 Digit" data-minlength="10" placeholder="Contact No" id="contact_no" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-lg-6">
                        <label className="p-2">Email Address</label>
                        <input type="email" className="form-control" placeholder="Email Address" id="email" data-error="Enter Valid Email Address" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-lg-6">
                        <label className="p-2">ID Card Type</label>
                        <select className="form-control" id="id_card_id" data-error="Select ID Card Type" required onChange="validId(this.value);">
                          <option selected disabled>Select ID Card Type</option>

                        </select>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-lg-6">
                        <label className="p-2">Selected ID Card Number</label>
                        <input type="text" className="form-control" placeholder="ID Card Number" id="id_card_no" data-error="Enter Valid ID Card No" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-lg-12">
                        <label className="p-2">Residential Address</label>
                        <input type="text" className="form-control" placeholder="Full Address" id="address" required />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="py-3">
                    <button type="submit" className="btn btn-md btn-success pull-right" style={{ borderRadius: 0 }}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reservation