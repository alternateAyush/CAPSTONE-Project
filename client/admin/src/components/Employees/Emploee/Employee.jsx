import React from 'react'
import moment from 'moment'
import { MdDelete,MdEdit } from "react-icons/md";



const Employee = ({emp}) => {
  return (
    <div className='h-min-40 h-auto py-2 px-3 rounded-md flex flex-col md:flex-row justify-between items-stretch space-x-3 bg-sky-500/50'>
        <div className='h-auto flex flex-col md:flex-row items-stretch justify-start space-x-3'>
            <div className='h-36 w-36 flex justify-center border-2 border-white items-center rounded-full bg-black/50 overflow-hidden'>
                {(emp.imgUrl) && <img className='w-full h-full object-cover' src={emp.imgUrl}/> }        
            </div>
            <div className='flex flex-col justify-start items-start w-3/5'>
                <div className='flex flex-row space-x-1 justify-start items-baseline'>
                    <h5 className='font-bold text-xl'>{`${emp.firstName} ${emp.lastName}`}</h5>
                    <span className='text-sm'>{emp.empId}</span>
                </div>
                <div className='flex flex-row justify-start items-center space-x-1'>
                    <span className='font-bold'>Department:</span>
                    <span>{emp.department}</span>
                </div>
                <div className='flex flex-row justify-start items-center space-x-1'>
                    <span className='font-bold'>Job Role:</span>
                    <span>{emp.jobRole}</span>
                </div>
                <div className='flex flex-row justify-start items-center space-x-1'>
                    <span className='font-bold'>Email:</span>
                    <span>{emp.email}</span>
                </div>
                <div className='flex flex-row justify-start items-center space-x-1'>
                    <span className='font-bold'>Date Joined:</span>
                    <span>{moment(emp.doj).format('YYYY-MM-DD')}</span>
                </div>
                <div className='flex flex-row justify-start items-center space-x-1'>
                    <span className='font-bold'>DOB:</span>
                    <span>{moment(emp.dob).format('YYYY-MM-DD')}</span>
                </div>
            </div>
            
        </div>
        <div className='flex w-auto flex-col justify-center items-center space-y-2'>
                <button onClick={()=>{}} className="w-full flex flex-row justify-center items-center space-x-1 bg-blue-500 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <MdEdit size={20}/><span>Edit Info</span>                
                </button>
                <button onClick={()=>{}}  className="w-full flex flex-row justify-center items-center space-x-1 bg-red-500 w-1/2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    <MdDelete size={20}/><span>Delete Profile</span>
                </button>
                
        </div>
      
    </div>
  )
}

export default Employee
