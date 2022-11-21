import express from 'express';
import db from './config/db.js';

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API is running...');
})

app.get("/api/get", (req,res)=>{

    var sql = "SELECT count(*) as countRooms FROM room where deleteStatus = '0';SELECT count(*) as countReservations FROM booking;Select count(*) as countStaff from staff;Select count(*) as countComplaints from complaint;Select count(*) as countBookedRooms from room where status = '1';Select count(*) as countAvailableRooms from room where status is NULL and deleteStatus = '0';Select count(*) as countCheckedIn from room where check_in_status = '1';Select count(*) as countPendingPayments from booking where payment_status = '0';Select sum(total_price) as earning from booking where payment_status = '1';Select sum(total_price) as pendingPayment from booking where payment_status = '0';";
    db.query(sql, (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });  
});

const PORT = 5000

app.listen(PORT,()=>{
    console.log('Server is running on port 5000');
})