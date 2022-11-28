import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Staff = () => {

  const [getStaff, setGetStaff] = useState([]);
  const [getShift, setGetShift] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      const { data } = await axios.get('/api/manage_staff')
      setGetStaff(data);
      console.log(data)
    }
    fetchStaff();
    const fetchShift = async () => {
      const { data } = await axios.get('/api/shift')
      setGetShift(data);
      console.log(data)
    }
    fetchShift();
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
              <li className="active">/ Manage Staff</li>
            </ol>
          </div>



          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                {/* <div className="panel-heading">Employee Details:
                  <a href="/prateek" className="btn btn-secondary pull-right" style={{ borderRadius: 0 }}>Add Employee</a>
                </div> */}
                <div className="panel-body">
                  <table className="table table-striped table-bordered table-responsive" cellspacing="0" width="100%"
                    id="rooms">
                    <thead>
                      <tr>
                        <th>Sr. No</th>
                        <th>Employee Name</th>
                        <th>Staff</th>
                        <th>Shift</th>
                        <th>Joining Date</th>
                        <th>Salary</th>
                        {/* <th>Change Shift</th>
                        <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {getStaff.map((item, index)=>{
                        return (<tr key={index}>

                        <td>{item.emp_id}</td>
                        <td>{item.emp_name}</td>
                        <td>{item.staff_type}</td>
                        <td>{`${item.shift} - ${item.shift_timing}`}</td>
                        <td>{item.joining_date}</td>
                        <td>{item.salary}</td>
                        {/* <td>
                          <button className="btn btn-warning" style={{ borderRadius: 0 }} data-toggle="modal" data-target="#changeShift"
                            data-id="<?php echo $staff['emp_id']; ?>" id="change_shift">Change Shift</button>
                        </td> */}
                        {/* <td>

                          <button data-toggle="modal"
                            data-target={`#empDetail${item.emp_id}`}
                            data-id={item.emp_id} id="editEmp"
                            className="btn btn-info" style={{ borderRadius: 0 }}><i className="fa fa-pencil"></i></button>
                          <a href='/prateek'
                            className="btn btn-danger" onclick="return confirm('Are you Sure?')" style={{ borderRadius: 0 }}><i
                              className="fa fa-trash"></i></a>
                          <a href='/prateek'
                            className="btn btn-success" title="Employee Histery" style={{ borderRadius: 0 }}><i className="fa fa-eye"></i></a>
                        </td> */}
                      </tr>)
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div id="empDetail<?php echo $staffGlobal['emp_id']; ?>" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Employee Detail</h4>
                  </div>
                  <div className="modal-body">

                    <div className="row">
                      <div className="col-lg-12">
                        <div className="panel panel-default">
                          <div className="panel-heading">Employee Detail:</div>
                          <div className="panel-body">
                            <form data-toggle="validator" action="functionmis.php"
                              method="post" />
                            <div className="row">
                              <div className="form-group col-lg-6">
                                <label>Staff</label>
                                <select className="form-control" id="staff_type" name="staff_type_id"
                                  required>
                                  <option selected disabled>Select Staff Type</option>
                                </select>
                              </div>

                              <div className="form-group col-lg-6">
                                <select className="form-control" id="shift" name="shift_id" required>
                                  <option selected disabled>Select Staff Type</option>
                                </select>
                              </div>
                              <input type="hidden" value="<?php echo $staffGlobal['emp_id']; ?>"
                                id="emp_id" name="emp_id" />

                              <div className="form-group col-lg-6">
                                <label>First Name</label>
                                <input type="text" value="<?php echo $fullname[0]; ?>"
                                  className="form-control" placeholder="First Name" id="first_name"
                                  name="first_name" required />
                              </div>

                              <div className="form-group col-lg-6">
                                <label>Last Name</label>
                                <input type="text" value="<?php echo $fullname[1]; ?>"
                                  className="form-control" placeholder="Last Name" id="last_name"
                                  name="last_name" required />
                              </div>

                              <div className="form-group col-lg-6">
                                <label>ID Card Type</label>
                                <select className="form-control" id="id_card_id" name="id_card_type"
                                  required>
                                  <option selected disabled>Select ID Card Type</option>
                                </select>
                              </div>

                              <div className="form-group col-lg-6">
                                <label>ID Card No</label>
                                <input type="text" className="form-control" placeholder="ID Card No"
                                  id="id_card_no"
                                  value="<?php echo $staffGlobal['id_card_no']; ?>"
                                  name="id_card_no" required />
                              </div>
                              <div className="form-group col-lg-6">
                                <label>Contact Number</label>
                                <input type="number" className="form-control"
                                  placeholder="Contact Number" id="contact_no"
                                  value="<?php echo $staffGlobal['contact_no']; ?>"
                                  name="contact_no" required />
                              </div>

                              <div className="form-group col-lg-6">
                                <label>Address</label>
                                <input type="text" className="form-control" placeholder="address"
                                  id="address" value="<?php echo $staffGlobal['address']; ?>"
                                  name="address" />
                              </div>

                              <div className="form-group col-lg-6">
                                <label>Salary</label>
                                <input type="number" className="form-control" placeholder="Salary"
                                  id="salary" value="<?php echo $staffGlobal['salary']; ?>"
                                  name="salary" required />
                              </div>

                            </div>

                            <button type="submit" className="btn btn-lg btn-primary" name="submit">Submit
                            </button>
                            <button type="reset" className="btn btn-lg btn-danger">Reset</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>

            <div id="changeShift" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Change Shift</h4>
                  </div>
                  <div className="modal-body">

                    <div className="row">
                      <div className="col-lg-12">
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <form data-toggle="validator" method="post">
                              <div className="row">
                                <div className="form-group col-lg-12">
                                  <label>Shift</label>
                                  <select className="form-control" id="shift" name="shift_id" required>
                                    <option selected disabled>Select Staff Type</option>
                                    {getShift.map((item, index)=>{
                                        return <option key={index} value={item.shift_id}>{`${item.shift} - ${item.shift_timing}`}</option>
                                    })}
                                  </select>
                                </div>
                              </div>
                              <input type="hidden" name="emp_id" value="" id="getEmpId" />
                              <button type="submit" className="btn btn-lg btn-primary" name="change_shift">Submit</button>
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
      </div>

    </>
  )
}

export default Staff