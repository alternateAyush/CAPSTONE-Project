import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employees.js';
import reviewRoutes from './routes/reviewFormat.js';
import issuesRoutes from './routes/issues.js';


dotenv.config();
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(bodyParser.json({limit:"30mb",extended:true}));

// backend routes
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use('/admin/employees',employeeRoutes);
app.use('/review',reviewRoutes);
app.use('/issues',issuesRoutes);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL)
    .then(()=>
        app.listen(PORT,()=>
            console.log(`Server is running on port: ${PORT}`)
        )
    ).catch((error)=>console.log(`Server error: ${error}`));