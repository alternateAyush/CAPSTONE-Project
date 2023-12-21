import * as api from '../../api/employees.js';
import {createAsyncThunk} from '@reduxjs/toolkit';

// const toArray = (tags)=>{
//     return tags.split(",");
// }

export const getEmployees = createAsyncThunk('FETCH_ALL', async()=>{
    try{
        const {data} = await api.fetchEmployees();        
        return data;
    }catch(error){
        console.log(error.message);
    }
})
export const createEmployee = createAsyncThunk('CREATE', async(emp)=>{
    try{    
        const {data} = await api.createEmployee(emp);
        return data;
    }catch(error){
        console.log(error.message);
        console.log('emp creation failed');
    }
})