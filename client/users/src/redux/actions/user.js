import * as api from '../../api/userApi.js';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

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