import React from 'react'
import moment from 'moment'
import { useState } from 'react';
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import{notify} from '../index.js';

const Issue = ({issue}) => {
  const [importance,setImpotance] = useState(issue.important);
  const handleClick=()=>{
    let str="Issue marked urgent!";
    if(importance){
        str="Issue unmarked!";
    }
    issue.importance=!issue.importance;
    setImpotance((importance)=>!importance);
    notify.success(str);
  }
  return (
    <div className='relative z-0 flex flex-col p-2 space-y-3 w-full border-2 border-red-500 rounded'>
        <button className='absolute top-2 right-2' onClick={handleClick}><FaBookmark color={(importance)?'red':'white'}/></button>
        <div className='flex flex-row space-x-2 justify-start items-center'>
           <MdOutlineReportGmailerrorred color='red' size={40} />
           <div className='flex flex-row space-x-1 items-baseline'>
                <span className='text-xl font-bold'>{issue.raisedBy.name}</span>
                <span className='text-sm'>raised {moment(issue.date, "YYYYMMDD").fromNow()}</span>
           </div>           
        </div>   
        <div className='flex flex-row space-x-1 items-center'>
            {
                issue.people.map((people)=>{
                    return <div key={people.id} className='flex text-red-500 text-md bg-white/75 border-2 border-red-500 flex-row items-center w-auto rounded-full p-2 space-x-1'>
                        <span>{people.id}</span>
                        <span>{people.name}</span>
                    </div>
                })
            }
        </div>  
        <div className='flex flex-row items-center space-x-2'>
            <span className='font-bold'>Description:</span>
            <div className='text-black border border-black bg-white/75 p-2 rounded'>
                <p>{issue.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Issue
