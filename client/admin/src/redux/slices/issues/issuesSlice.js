import {createSlice} from '@reduxjs/toolkit';
import {getIssues,updateIssue,deleteIssue} from '../../actions/issues.js';

const initialState = {
    issues:[],
}

export const issuesSlice = createSlice({
    name:'issues',
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
        builder.addCase(getIssues.fulfilled, (state,action)=>{
            state.issues=action.payload;
            console.log('getIssues data: ',action.payload)            
        }) 
        builder.addCase(deleteIssue.fulfilled, (state,action)=>{
            state.issues = state.issues.filter((issue)=>issue._id!=action.payload);            
        })
        builder.addCase(updateIssue.fulfilled, (state,action)=>{
            state.issues=state.issues.map((issue)=>{
                if(issue._id==action.payload._id){
                    return action.payload;
                }
                return issue;
            });                        
        })      
    }
});

export const {issuesReducer} = issuesSlice.actions;
export default issuesSlice.reducer; 