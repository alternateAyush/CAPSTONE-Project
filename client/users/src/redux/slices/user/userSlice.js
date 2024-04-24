import {createSlice} from '@reduxjs/toolkit';
import {getEmployees} from '../../actions/user.js';


const initialState = {
    employees:[],
}

export const userSlice = createSlice({
    name:'user',
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
    }
});

export const {userReducer} = userSlice.actions;
export default userSlice.reducer; 