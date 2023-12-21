import React from 'react'
import { Link } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";
import { IoPersonAdd,IoPerson,IoSearch } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed z-10 left-0 top-0 w-screen px-4 pr-5 py-2 md:py-0 h-auto md:h-12 flex flex-col md:flex-row justify-between items-start  md:items-center bg-sky-500 text-white font-bold shadow">
      <div className='my-2 md:my-0 text-lg'>
      <Link to='/'>
        <span>Logo</span>
      </Link>
      </div>
      <ul className='flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-3'>
        <li><Link to='/search' className='flex flex-row justify-center items-center space-x-1'>
          <IoSearch/> <span>Search</span>
        </Link></li>
        <li><Link to='/addEmployee' className='flex flex-row justify-center items-center space-x-1'>
          <IoPersonAdd/><span>Employee</span>
        </Link></li>
        <li><Link to='/issues' className='flex flex-row justify-center items-center space-x-1'>
          <MdOutlineReportGmailerrorred/>
          <span>Issues</span> 
        </Link></li>
        <li><Link to='/profile' className='flex flex-row justify-center items-center space-x-1'>
          <IoPerson/>
          <span>Profile</span> 
        </Link></li>
        <li><Link to='/about' className='flex flex-row justify-center items-center space-x-1'>
          <MdOutlineInfo/>
          <span>About</span> 
        </Link></li>
        <li>
          <button type="submit" className="flex flex-row justify-center items-center space-x-1 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
              <CiLogout size={15}/><span>Logout</span>                
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
