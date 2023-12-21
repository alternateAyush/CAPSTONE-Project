import { mongoose } from "mongoose";
import Employee from "../models/employee.js";

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    console.log("get hit");
    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createEmployee = async (req, res) => {
  const emp = req.body;
  const newEmployee = new Employee(emp);
  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};
export const updateEmployee = async (req, res) => {
  const { id: _id } = req.params;
  const employee = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(_id, employee, {
      new: true,
    });
    res.status(201).json(updatedEmployee);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};
export const deleteEmployee = async (req, res) => {
  const { id: _id } = req.params;
  try {
    await Employee.findByIdAndDelete(_id);
    res.status(200).json({ message: `Employee ${_id} deleted successfully` });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error });
  }
};
