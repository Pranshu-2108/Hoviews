import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Dashboard = () => {
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
				<li><a href="#">
					<em className="fa fa-home"> </em><spacer />
				</a></li>
				<li className="active">/ Dashboard</li>
			</ol>
		</div>
		
		<div className="panel panel-container p-4">
			<div className="row">
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-teal panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-bed color-blue"></em>
							<div className="large">12</div>
							<div className="text-muted">Total Rooms</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-blue panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-bookmark color-orange"></em>
							<div className="large">34</div>
							<div className="text-muted">Reservations</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-orange panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-users color-teal"></em>
							<div className="large">56</div>
							<div className="text-muted">Staffs</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-red panel-widget ">
						<div className="row no-padding"><em className="fa fa-xl fa-comments color-red"></em>
							<div className="large">69</div>
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
							<div className="large">34</div>
							<div className="text-muted">Booked Rooms</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-blue panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-check-circle color-green"></em>
							<div className="large">12</div>
							<div className="text-muted">Available Rooms</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-orange panel-widget border-right">
						<div className="row no-padding"><em className="fa fa-xl fa-check-square-o color-magg"></em>
							<div className="large">11</div>
							<div className="text-muted">Checked In</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-3 col-lg-3 no-padding">
					<div className="panel panel-red panel-widget ">
						<div className="row no-padding"><em className="fa fa-xl fa-spinner color-blue"></em>
							<div className="large">32</div>
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
						<div className="row no-padding"><em className="fa fa-xl fa-money color-red"></em>
							<div className="large">Rs.8765</div>
							<div className="text-muted">Total Earnings</div>
						</div>
					</div>
				</div>
				<div className="col-xs-6 col-md-4 col-lg-4 no-padding">
					<div className="panel panel-orange panel-widget ">
						<div className="row no-padding"><em className="fa fa-xl fa-credit-card color-purp"></em>
							<div className="large">Rs.6969</div>
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