import React from 'react'
import Navbar from '../Navbar/Navbar';
import { MdOutlineModeEdit } from "react-icons/md";
import { TbPassword } from "react-icons/tb";

const imgLink = "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";

const Profile = () => {
  const rowCss = 'flex flex-row items-center w-full space-x-1';
  const itemCss = 'w-1/2 bg-gray-100 rounded-md border p-2 border-green-400 flex flex-row justify-start items-center space-x-2 text-xl font-bold text-green-900';
  return (
    <div className='w-full flex justify-center'>
        <Navbar/>
        <div className='mt-16 mb-4 p-4 flex flex-col justify-start items-center w-3/4 rounded-md bg-white shadow-md shadow-gray-700'>
          <div className='my-2 rounded-full w-60 h-60 flex items-center justify-center border border-green-500'>
            <img src={imgLink} className='rounded-full w-full h-full'/>
          </div>
          <div className='my-2 flex-col justify-start items-center w-full space-y-2'>
            <div className={rowCss}>
              <div className={itemCss}>
                <span>Name:</span>
                <span>Ayush Bhatt</span>
              </div>
              <div className={itemCss}>
                <span>Employee Id:</span>
                <span>EMP1002</span>
              </div>
            </div>
            <div className={rowCss}>
              <div className={itemCss}>
                <span>Deprtment:</span>
                <span>IT</span>
              </div>
              <div className={itemCss}>
                <span>Job Role:</span>
                <span>Software Developer</span>
              </div>
            </div>
            <div className={rowCss}>
              <div className={itemCss}>
                <span>Date of Birth:</span>
                <span>22/08/1996</span>
              </div>
              <div className={itemCss}>
                <span>Date of Joining:</span>
                <span>18/01/2017</span>
              </div>
            </div>
            <div></div>
          </div>
          <div className='flex w-full space-x-2 justify-evenly items-center'>
            <button className='flex justify-center space-x-2 items-center w-1/3 p-2 rounded bg-blue-400 text-white font-bold'>
              <MdOutlineModeEdit size={20}/>
              <span>Request Edit</span>
            </button>
            <button className='flex justify-center space-x-2 items-center w-1/3 p-2 rounded bg-green-400 text-white font-bold'>
              <TbPassword size={20}/>
              <span>Change Password</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Profile;
