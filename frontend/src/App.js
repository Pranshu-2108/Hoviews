import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Reservation from './screens/Reservation';
import Room from './screens/Room';
import Staff from './screens/Staff';
import Complaint from './screens/Complaint';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/room_management' element={<Room />} />
          <Route path='/staff_management' element={<Staff />} />
          <Route path='/complaint' element={<Complaint />} />
          {/* <Route path='/statistics' element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;