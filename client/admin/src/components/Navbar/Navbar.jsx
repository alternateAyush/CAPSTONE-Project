import React from 'react'
import { Link } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-screen px-4 py-2 md:py-0 h-auto md:h-12 flex flex-col md:flex-row justify-between items-start  md:items-center bg-sky-500 text-white font-bold shadow">
      <div className='my-2 md:my-0 text-lg'>
      <Link to='/'>
        <span>Logo</span>
      </Link>
      </div>
      <ul className='flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-3'>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/addEmployee'>Add employee</Link></li>
        <li>Profile</li>
        <li>About</li>
        <li>
          <button type="submit" className="flex flex-row justify-center items-center space-x-1 bg-red-500 hover:bg-red-700 text-white p-1 rounded">
              <CiLogout size={15}/><span>Logout</span>                
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
