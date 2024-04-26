import * as api from '../../api/issues.js';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getIssues = createAsyncThunk('FETCH_ALL_ISSUES', async()=>{
    try{
        const {data} = await api.fetchIssues();        
        return data;
    }catch(error){
        console.log(error.message);
    }
})

export const updateIssue = createAsyncThunk('UPDATE_ISSUE', async(issueData)=>{
    try{     
        const {data} = await api.updateIssue(issueData.id,issueData.issue);
        return data;
    }catch(error){
        console.log(error.message);
        console.log('update failed');
    }
})

export const deleteIssue = createAsyncThunk('DELETE_ISSUE', async(id)=>{
    try{      
        await api.deleteIssue(id);
        return id;
    }catch(error){
        console.log(error.message);
        console.log('emp delete failed');
    }
})