import {createSlice} from '@reduxjs/toolkit';
import {getEmployees,createEmployee} from '../../actions/employees.js';

const initialState = {
    employees:[],
}

export const employeesSlice = createSlice({
    name:'employees',
    initialState,
    // reducers:{
    //     postsReducer: async (posts,action)=>{
    //         if(action.type=='FETCH_ALL'){
    //             posts = action.payload;
    //         }else if(action.type=='CREATE'){
    //             posts.push(action.payload);
    //         }
    //         return;
    //     }
    // },
    extraReducers: (builder)=>{
        builder.addCase(getEmployees.fulfilled, (state,action)=>{
            state.employees=action.payload;
            console.log('getEmployees data: ',action.payload)            
        })
        builder.addCase(createEmployee.fulfilled, (state,action)=>{
            state.employees.push(action.payload);            
        })
        
    }
});

export const {employeesReducer} = employeesSlice.actions;
export default employeesSlice.reducer; 