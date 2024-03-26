import React from 'react'
import { CiEdit } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { Link } from 'react-router-dom'

const Review = () => {
  return (
    <div className='mt-16 flex flex-row justify-between flex-wrap w-1/2 p-2'>
      <Link to='/review/format' className='flex justify-center items-center w-72 bg-white my-2 shadow-md shadow-green-300 h-72 rounded-2xl'>
         <div className='flex flex-col justify-center items-center'>
          <CiEdit size={50} color='green'/>
          <p>Edit review format</p>
         </div>
      </Link>
      <Link to='/review/report' className='flex justify-center items-center w-72 bg-white my-2 shadow-md shadow-red-300 h-72 rounded-2xl'>
      <div className='flex flex-col justify-center items-center'>
          <TbReportSearch size={50} color='red'/>
          <p>Review Report</p>
         </div>
      </Link>
    </div>
  )
}

export default Review;
