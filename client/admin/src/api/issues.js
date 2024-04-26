import axios from 'axios';

const url='http://localhost:5000/issues/';

export const fetchIssues=()=>axios.get(url);
export const updateIssue = (id,issue)=>axios.patch(`${url}/${id}`,issue);
export const deleteIssue = (id)=> axios.delete(`${url}/${id}`);
// export const createEmployee = (newEmp)=>axios.post(url,newEmp);
// export const updateEmployee = (id,newEmp)=>axios.patch(`${url}/${id}`,newEmp);