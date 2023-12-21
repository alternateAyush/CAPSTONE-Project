import React from 'react'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux';
import { getEmployees } from '../../redux/actions/employees';
import {Employees} from './../index.js';
import SearchBar from './SearchBar/SearchBar';

const Search = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getEmployees());
    })
    return (
        <div className='z-0 flex flex-col justify-start items-center h-auto p-2 mt-16 w-3/4 bg-white/50 rounded'>
            <SearchBar/>
            <Employees/>        
        </div>
    )
}

export default Search
