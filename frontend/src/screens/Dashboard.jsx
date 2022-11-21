import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import axios from 'axios'

const Dashboard = () => {

  const [Trooms, setTrooms] = useState("");
  const [Treservations, setTreservations] = useState("");
  const [Tstaff, setTstaff] = useState("");
  const [Tcomplaints, setcomplaints] = useState("");
  const [Tbookedrooms, setTbookedrooms] = useState("");
  const [Tavailablerooms, setTavailablerooms] = useState("");
  const [Tcheckedin, setTcheckedin] = useState("");
  const [Tpendingpayments, setTpendingpayments] = useState("");
  const [earning, setearning] = useState("");
  const [pendingpayment, setpendingpayment] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/get')
      console.log(data);
      setTrooms(data[0][0].countRooms);
      setTreservations(data[1][0].countReservations);
      setTstaff(data[2][0].countStaff);
      setcomplaints(data[3][0].countComplaints);
      setTbookedrooms(data[4][0].countBookedRooms);
      setTavailablerooms(data[5][0].countAvailableRooms);
      setTcheckedin(data[6][0].countCheckedIn);
      setTpendingpayments(data[7][0].countPendingPayments);
      setearning(data[8][0].earning);
      setpendingpayment(data[9][0].pendingPayment);

    }
    fetchData();
  }, [])
  
  return (
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
				<li className="active">/ Dashboard</li>
			</ol>
		</div>
		
		<div className="panel panel-container p-4">
			<div className="row">
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-teal panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-bed color-blue"></em>
							<div className="large">{Trooms}</div>
							<div className="text-muted">Total Rooms</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-blue panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-bookmark color-orange"></em>
							<div className="large">{Treservations}</div>
							<div className="text-muted">Reservations</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-orange panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-users color-teal"></em>
							<div className="large">{Tstaff}</div>
							<div className="text-muted">Staffs</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-red panel-widget ">
						<div className="row no-padding"><em className="fa fa-xl fa-comments color-red"></em>
							<div className="large">{Tcomplaints}</div>
							<div className="text-muted">Complaints</div>
						</div>
					</div>
				</div>
			</div>

			<hr />

			<div className="row">
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-teal panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-reorder color-red"></em>
							<div className="large">{Tbookedrooms}</div>
							<div className="text-muted">Booked Rooms</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-blue panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-check-circle color-green"></em>
							<div className="large">{Tavailablerooms}</div>
							<div className="text-muted">Available Rooms</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-orange panel-widget border-right">
						<div className="row no-padding"><i className="fa-regular fa-square-check color-magg" style={{fontSize:30, marginTop:-12, marginBottom: -12, padding:0}}></i>
							<div className="large">{Tcheckedin}</div>
							<div className="text-muted">Checked In</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-red panel-widget ">
						<div className="row no-padding"><em className="fa fa-xl fa-spinner color-blue"></em>
							<div className="large">{Tpendingpayments}</div>
							<div className="text-muted">Total Pending Payments</div>
						</div>
					</div>
				</div>
			</div>

			<hr />

			<div className="row">
				<div className="col-xs-6 col-md-2 col-lg-2 no-padding">
					
				</div>

				<div className="col-xs-6 col-md-4 col-lg-4 no-padding">
					<div className="panel panel-red panel-widget border-right">
						<div className="row no-padding"><em className="fa-regular fa-money-bill-1 color-red" style={{fontSize:30, marginTop:-12, marginBottom: -12, padding:0}}></em>
							<div className="large">Rs.{earning}</div>
							<div className="text-muted">Total Earnings</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-4 col-lg-4 no-padding">
					<div className="panel panel-orange panel-widget ">
						<div className="row no-padding"><em className="fa fa-xl fa-credit-card color-purp"></em>
							<div className="large">Rs.{pendingpayment}</div>
							<div className="text-muted">Pending Payment</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-2 col-lg-2 no-padding">
					
				</div>
			</div>
		</div>
		
	</div>
    </div>
  )
}

export default Dashboard