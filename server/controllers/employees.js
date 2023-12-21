import { mongoose } from "mongoose";
import Employee from "../models/employee.js";

export const getEmployees = async (req,res)=>{
    try{
        const employees = await Employee.find();
        console.log('get hit')
        res.status(200).json(employees);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
export const createEmployee = async (req,res)=>{
    const emp = req.body;
    const newEmployee=new Employee(emp);
    try{
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }catch(error){
        console.log(error.message);
        res.status(409).json({message:error.message});
    }
}