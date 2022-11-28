import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
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

    const [complainantName, setComplainantName] = useState("")
    const [complaintType, setComplaintType] = useState("")
    const [complaintDes, setComplaintDes] = useState("")
    const [budget, setBudget] = useState(0)
    const [resolveId, setResolveId] = useState(0)

    const navigate = useNavigate()
    const postComplaint = () => {

        var body = {
            complainant_name : complainantName,
            complaint_type : complaintType,
            complaint : complaintDes
        }

        axios({
        method: "post",
        url: "/api/complaint",
        data: body
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
        navigate('/complaint')
    }

    const handleresolve = () => {

        var databody = {
            resolve_budget : budget,
            complaint_id : resolveId
        }

        axios({
        method: "post",
        url: "/api/complaint/resolve",
        data: databody
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
        navigate('/complaint')
    }

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
                                    <form data-toggle="validator">
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <label>Complainant Name</label>
                                                <input type="text" className="form-control" placeholder="Complainant Name" name="complainant_name" onChange={(e)=>{setComplainantName(e.target.value)}} required />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-lg-6">
                                                <label>Complaint Type</label>
                                                <input type="text" className="form-control" placeholder="Complaint Type" name="complaint_type" onChange={(e)=>{setComplaintType(e.target.value)}} required />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-lg-12">
                                                <label>Please Describe Your Complaints</label>
                                                <textarea className="form-control" name="complaint" placeholder="Complaint" onChange={(e)=>{setComplaintDes(e.target.value)}} required></textarea>
                                            </div>

                                        </div>

                                        <button type="submit" className="btn btn-lg btn-success" name="createComplaint" onClick={postComplaint} style={{ borderRadius: 0 }}>Submit</button>
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
                                                        {item.resolve_status ? item.resolve_date : (<button className="btn btn-info" data-toggle="modal" style={{borderRadius:0}} data-target="#complaintModal" onClick={()=>{setResolveId(item.id)}} data-id="" id="complaint">Resolve</button>)}
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
                                            <form data-toggle="validator">
                                                <div className="form-group">
                                                    <label>Budget</label>
                                                    <input className="form-control" placeholder="Budget" name="budget" data-error="Enter Budget" onChange={(e)=>{setBudget(e.target.value)}} required />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <input type="hidden" id="complaint_id" name="complaint_id" value="complaint_id" />
                                                <button className="btn btn-success pull-right" name="resolve_complaint" onClick={handleresolve}>Resolve Complaint</button>
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