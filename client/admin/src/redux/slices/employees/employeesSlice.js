import {createSlice} from '@reduxjs/toolkit';
import {getEmployees,createEmployee,deleteEmployee,setEditEmp,updateEmployee} from '../../actions/employees.js';

const initialState = {
    employees:[],
    employeeId:null,
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
        builder.addCase(deleteEmployee.fulfilled, (state,action)=>{
            state.employees = state.employees.filter((emp)=>emp._id!=action.payload);            
        })
        builder.addCase(setEditEmp,(state,action)=>{
            state.employeeId=action.payload
        })
        builder.addCase(updateEmployee.fulfilled, (state,action)=>{
            state.employees=state.employees.map((emp)=>{
                if(emp._id==action.payload._id){
                    return action.payload;
                }
                return emp;
            });                        
        })        
    }
});

export const {employeesReducer} = employeesSlice.actions;
export default employeesSlice.reducer; 