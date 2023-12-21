import axios from 'axios';

const url='http://localhost:5000/admin/employees';

export const fetchEmployees=()=>axios.get(url);
export const createEmployee = (newEmp)=>axios.post(url,newEmp);
export const deleteEmployee = (id)=> axios.delete(`${url}/${id}`);
export const updateEmployee = (id,newEmp)=>axios.patch(`${url}/${id}`,newEmp);