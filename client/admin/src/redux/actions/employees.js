import * as api from '../../api/employees.js';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

// const toArray = (tags)=>{
//     return tags.split(",");
// }
export const setEditEmp = createAction('setEditEmp');
export const setEmpReport = createAction('setEmpReport');

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
export const deleteEmployee = createAsyncThunk('DELETE', async(id)=>{
    try{      
        await api.deleteEmployee(id);
        return id;
    }catch(error){
        console.log(error.message);
        console.log('emp delete failed');
    }
})
export const updateEmployee = createAsyncThunk('UPDATE', async(empData)=>{
    try{     
        const {data} = await api.updateEmployee(empData.id,empData.employee);
        return data;
    }catch(error){
        console.log(error.message);
        console.log('update failed');
    }
})