import React from 'react'
import { useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getEmployees } from '../../redux/actions/employees';
import {Employees} from './../index.js';
import { IoSearchOutline } from "react-icons/io5";
import SearchBar from './SearchBar/SearchBar';

const Search = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getEmployees());
    })
    return (
        <div className='z-0 flex flex-col justify-start items-center h-auto p-2 mt-16 w-3/4 bg-white/50 rounded'>
            <div className='w-full flex flex-row justify-center items-center'>          
                <div className="relative mb-4 w-1/2 flex flex-wrap items-stretch">
                    <input
                        type="search"
                        className="border w-4/5 px-2 border-blue-500 rounded-l focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon1" />
                       <button
                        className="relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1">
                        <IoSearchOutline size={20} color='white'/>
                    </button>
                </div>
        </div>
            <Employees/>        
        </div>
    )
}

export default Search
