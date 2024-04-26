import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from './slices/employees/employeesSlice.js';
import issuesReducer from './slices/issues/issuesSlice.js';

export const store = configureStore({
    reducer:{
        employees:employeesReducer,
        issues:issuesReducer,
    }
});