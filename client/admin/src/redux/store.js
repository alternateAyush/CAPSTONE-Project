import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from './slices/employees/employeesSlice.js';

export const store = configureStore({
    reducer:{
        employees:employeesReducer,
    }
});