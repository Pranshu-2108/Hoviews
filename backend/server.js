import express from 'express';
import db from './config/db.js';

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API is running...');
})

app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM room", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   
});

const PORT = 3000

app.listen(PORT,()=>{
    console.log('Server is running on port 3000');
})