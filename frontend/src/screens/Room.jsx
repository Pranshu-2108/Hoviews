import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Room = () => {

    const [getDetails, setGetDetails] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            const { data } = await axios.get('/api/manage_room')
            setGetDetails(data);
            console.log(data)
        }
        fetchDetails();
    }, [])


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

          <div className="row">
            <div className="col-lg-12">
              <div id="success"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">Manage Rooms
                  <button className="btn btn-secondary pull-right" style={{ borderRadius: 0 }} data-toggle="modal" data-target="#addRoom">Add Rooms</button>
                </div>
                <div className="panel-body">

                  <table className="table table-striped table-bordered table-responsive" cellSpacing="0" width="100%"
                    id="rooms">
                    <thead>
                      <tr>
                        <th>Room No</th>
                        <th>Room Type</th>
                        <th>Booking Status</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getDetails.map((item, index)=>{
                        return (<tr key={index}>
                          <td>{item.room_no}</td>
                                    <td>{item.room_type}</td>
                                    <td>
                                        {item.status ? <a href="/prateek" className="btn btn-danger" style={{borderRadius:0}}>Booked</a> : <a href="/prateek" class="btn btn-success" style={{borderRadius:0}}>Book Room</a>}
                                    </td>


                                    <td>
                                        {item.status && !item.check_in_status ? <button class="btn btn-warning" id="checkInRoom" data-id={item.room_id} data-toggle="modal" style={{borderRadius:0}} data-target="#checkIn">Check In</button> : (!item.status ? "-" : <a href="/prateek" class="btn btn-danger" style={{borderRadius:0}}>Checked In</a>)}
                                    </td>
                                    <td>
                                        {item.status && item.check_in_status ? <button class="btn btn-primary" style={{borderRadius:0}} id="checkOutRoom" data-id={item.room_id}>Check Out</button> : (!item.status && '-')}
                                    </td>
                                    <td>

                                        <button title="Edit Room Information" style={{orderRadius:60}} data-toggle="modal"
                                                data-target="#editRoom" data-id="<?php echo $rooms['room_id']; ?>"
                                                id="roomEdit" className="btn btn-info"><i className="fa fa-pencil"></i></button>
                                        {item.status && <button title="Customer Information" data-toggle="modal" data-target="#cutomerDetailsModal" data-id={item.room_id} id="cutomerDetails" class="btn btn-warning" style={{borderRadius:60}}><i class="fa fa-eye"></i></button>}

                                        <a href="ajax.php?delete_room=<?php echo $rooms['room_id']; ?>"
                                           className="btn btn-danger" style={{borderRadius:60}} onClick="return confirm('Are you Sure?')"><i
                                                    className="fa fa-trash" alt="delete"></i></a>
                                    </td>
                        </tr>)
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

          <div id="addRoom" className="modal fade" role="dialog">
            <div className="modal-dialog">

              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Add New Room</h4>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form id="addRoom" data-toggle="validator">
                        <div className="response"></div>
                        <div className="form-group">
                          <label>Room Type</label>
                          <select className="form-control" id="room_type_id" required
                            data-error="Select Room Type">
                            <option value disabled>Select Room Type</option>
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="form-group">
                          <label>Room No</label>
                          <input className="form-control" placeholder="Room No" id="room_no"
                            data-error="Enter Room No" required />
                          <div className="help-block with-errors"></div>
                        </div>
                        <button className="btn btn-success pull-right">Add Room</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div id="editRoom" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Edit Room</h4>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form id="roomEditFrom" data-toggle="validator">
                        <div className="edit_response"></div>
                        <div className="form-group">
                          <label>Room Type</label>
                          <select className="form-control" id="edit_room_type" required
                            data-error="Select Room Type">
                            <option value disabled>Select Room Type</option>
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>

                        <div className="form-group">
                          <label>Room No</label>
                          <input className="form-control" placeholder="Room No" id="edit_room_no" required
                            data-error="Enter Room No" />
                          <div className="help-block with-errors"></div>
                        </div>
                        <input type="hidden" id="edit_room_id" />
                        <button className="btn btn-success pull-right">Edit Room</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="cutomerDetailsModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title text-center"><b>Customer's Detail</b></h4>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <table className="table table-responsive table-bordered">
                        <tbody>
                          <tr>
                            <td><b>Customer Name</b></td>
                            <td id="customer_name"></td>
                          </tr>
                          <tr>
                            <td><b>Contact Number</b></td>
                            <td id="customer_contact_no"></td>
                          </tr>
                          <tr>
                            <td><b>Email</b></td>
                            <td id="customer_email"></td>
                          </tr>
                          <tr>
                            <td><b>ID Card Type</b></td>
                            <td id="customer_id_card_type"></td>
                          </tr>
                          <tr>
                            <td><b>ID Card Number</b></td>
                            <td id="customer_id_card_number"></td>
                          </tr>
                          <tr>
                            <td><b>Address</b></td>
                            <td id="customer_address"></td>
                          </tr>
                          <tr>
                            <td><b>Remaining Amount</b></td>
                            <td id="remaining_price"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="checkIn" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title text-center"><b>Room - Check In</b></h4>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <table className="table table-responsive table-bordered">

                        <tbody>
                          <tr>
                            <td><b>Customer Name</b></td>
                            <td id="getCustomerName"></td>
                          </tr>
                          <tr>
                            <td><b>Room Type</b></td>
                            <td id="getRoomType"></td>
                          </tr>
                          <tr>
                            <td><b>Room Number</b></td>
                            <td id="getRoomNo"></td>
                          </tr>
                          <tr>
                            <td><b>Check In</b></td>
                            <td id="getCheckIn"></td>
                          </tr>
                          <tr>
                            <td><b>Check Out</b></td>
                            <td id="getCheckOut"></td>
                          </tr>
                          <tr>
                            <td><b>Total Price</b></td>
                            <td id="getTotalPrice"></td>
                          </tr>
                        </tbody>
                      </table>
                      <form id="advancePayment">
                        <div className="payment-response"></div>
                        <div className="form-group col-lg-12">
                          <label>Advance Payment</label>
                          <input type="number" className="form-control" id="advance_payment"
                            placeholder="Please Enter Amounts Here.." />
                        </div>
                        <input type="hidden" id="getBookingID" value="" />
                        <button type="submit" className="btn btn-primary pull-right">Payment & Check In</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div id="checkOut" className="modal fade" role="dialog">
                <div className="modal-dialog">

                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title text-center"><b>Room- Check Out</b></h4>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <table className="table table-responsive table-bordered">

                            <tbody>
                              <tr>
                                <td><b>Customer Name</b></td>
                                <td id="getCustomerName_n"></td>
                              </tr>
                              <tr>
                                <td><b>Room Type</b></td>
                                <td id="getRoomType_n"></td>
                              </tr>
                              <tr>
                                <td><b>Room Number</b></td>
                                <td id="getRoomNo_n"></td>
                              </tr>
                              <tr>
                                <td><b>Check In</b></td>
                                <td id="getCheckIn_n"></td>
                              </tr>
                              <tr>
                                <td><b>Check Out</b></td>
                                <td id="getCheckOut_n"></td>
                              </tr>
                              <tr>
                                <td><b>Total Amount</b></td>
                                <td id="getTotalPrice_n"></td>
                              </tr>
                              <tr>
                                <td><b>Remaining Amount</b></td>
                                <td id="getRemainingPrice_n"></td>
                              </tr>
                            </tbody>
                          </table>
                          <form id="checkOutRoom_n" data-toggle="validator">
                            <div className="checkout-response"></div>
                            <div className="form-group col-lg-12">
                              <label><b>Remaining Payment</b></label>
                              <input type="text" className="form-control" id="remaining_amount"
                                placeholder="Remaining Payment" required
                                data-error="Please Enter Remaining Amount" />
                              <div className="help-block with-errors"></div>
                            </div>
                            <input type="hidden" id="getBookingId_n" value="" />
                            <button type="submit" className="btn btn-primary pull-right">Proceed Checkout</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Room