import express from 'express';
import db from './config/db.js';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
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

app.get("/api/getRooms", (req,res)=>{
    var sql = `select * from room Natural join room_type where room_type_id=${req.query.room_type_id} and status is null`;
    db.query(sql, (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });  
});

app.get("/api/reservation", (req,res)=>{

    var sql = "Select * from room_type;"
    db.query(sql, (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });  
});

app.post("/api/reservation", (req,res)=>{

    var sql = `INSERT INTO customer (customer_name,contact_no,email,id_card_type_id,id_card_no,address) VALUES (concat('${req.body.first_name}'," ",'${req.body.last_name}'),${req.body.contact_no},'${req.body.mail}',${req.body.id_card},'${req.body.idcard_no}','${req.body.address}');`
    db.query(sql, (err,result)=>{
        if(err) {
         console.log(err)
        } 
        console.log(result)
        var sql = `INSERT INTO booking (customer_id,room_id,check_in,check_out,total_price,remaining_price,payment_status) VALUES (${result.insertId},${req.body.room_no},'${req.body.check_in_date}','${req.body.check_out_date}',${req.body.total_price},${req.body.total_price},0);`
        db.query(sql, (err,result)=>{
            if(err) {
             console.log(err)
            } 
            console.log(res)
            //res.send(result)
        });
        res.send(result)
    });  
});

app.post("/api/complaint", (req,res)=>{

    var sql = `INSERT INTO complaint (complainant_name,complaint_type,complaint,resolve_status,budget) VALUES ('${req.body.complainant_name}','${req.body.complaint_type}','${req.body.complaint}',0,NULL);`
    db.query(sql, (err,result)=>{
        if(err) {
         console.log(err)
        } 
        res.send(result)
    });  
});

app.post("/api/complaint/resolve", (req,res)=>{

    console.log(req.body);
    var sql = `UPDATE complaint set budget = ${req.body.resolve_budget},resolve_status = 1 WHERE id=${req.body.complaint_id};`
    db.query(sql, (err,result)=>{
        if(err) {
         console.log(err)
        } 
        res.send(result)
    });  
});

app.get("/api/getIdCardsType", (req,res)=>{
    var sql = "Select * from id_card_type;"
    db.query(sql, (err,result)=>{
        if(err) {
         console.log(err)
        } 
    res.send(result)
    });  
});

app.get("/api/complaints", (req,res)=>{
    var sql = "Select * from complaint;"
    db.query(sql, (err,result)=>{
        if(err) {
         console.log(err)
        } 
    res.send(result)
    });  
});

app.get("/api/manage_room", (req,res)=>{
    var sql = "select * from room natural join room_type where deleteStatus = 0;"
    db.query(sql, (err,result)=>{
        if(err) {
         console.log(err)
        } 
    res.send(result)
    });  
});

app.get("/api/manage_staff", (req,res)=>{
    var sql = "select * from staff natural join staff_type natural join shift order by emp_id;"
    db.query(sql, (err,result)=>{
        if(err) {
         console.log(err)
        } 
    res.send(result)
    });  
});

app.get("/api/shift", (req,res)=>{
    var sql = "select * from shift;"
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