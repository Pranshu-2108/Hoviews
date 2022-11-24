import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Complaint = () => {

    const [getComplaints, setGetComplaints] = useState([]);

    useEffect(() => {
        const fetchComplaints = async () => {
            const { data } = await axios.get('/api/complaints')
            setGetComplaints(data);
            // console.log(data)
        }
        fetchComplaints();
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
                            <li className="active">/ Manage Complaints</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">Make Complaint</div>
                                <div className="panel-body">
                                    <form data-toggle="validator" method="post" action="">
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <label>Complainant Name</label>
                                                <input type="text" className="form-control" placeholder="Complainant Name" name="complainant_name" required />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-lg-6">
                                                <label>Complaint Type</label>
                                                <input type="text" className="form-control" placeholder="Complaint Type" name="complaint_type" required />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-lg-12">
                                                <label>Please Describe Your Complaints</label>
                                                <textarea className="form-control" name="complaint" placeholder="Complaint" required></textarea>
                                            </div>

                                        </div>

                                        <button type="submit" className="btn btn-lg btn-success" name="createComplaint" style={{ borderRadius: 0 }}>Submit</button>
                                        <button type="reset" className="btn btn-lg btn-danger" style={{ borderRadius: 0 }}>Reset</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div classNames="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">Complaint Management</div>
                                <div className="panel-body">


                                    <table className="table table-striped table-bordered table-responsive" cellSpacing="0" width="100%" id="rooms">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Complainant Name</th>
                                                <th>Complaint Type</th>
                                                <th>Complaint</th>
                                                <th>Created Date</th>
                                                <th>Resolve</th>
                                                <th>Budget</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {getComplaints.map((item,index) => {
                                                return (<tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.complainant_name}</td>
                                                    <td>{item.complaint_type}</td>
                                                    <td>{item.complaint}</td>
                                                    <td>{item.created_at}</td>
                                                    <td>
                                                        {item.resolve_status ? item.resolve_date : (<button class="btn btn-info" data-toggle="modal" style={{borderRadius:0}} data-target="#complaintModal" data-id="" id="complaint">Resolve</button>)}
                                                    </td>
                                                    <th>{item.budget}</th>


                                                </tr>)
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div id="complaintModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Complaint Resolve</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form data-toggle="validator" method="post" action="">
                                                <div className="form-group">
                                                    <label>Budget</label>
                                                    <input className="form-control" placeholder="Budget" name="budget" data-error="Enter Budget" required />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <input type="hidden" id="complaint_id" name="complaint_id" value="" />
                                                <button className="btn btn-success pull-right" name="resolve_complaint">Resolve Complaint</button>
                                            </form>
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

export default Complaint