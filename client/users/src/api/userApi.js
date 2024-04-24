import axios from 'axios';

const url='http://localhost:5000/admin/employees';

export const fetchEmployees=()=>axios.get(url);