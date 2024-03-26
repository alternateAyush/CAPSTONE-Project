import React,{useEffect,useState} from 'react'
import {useSelector} from "react-redux";
import { BsCalendarDate } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaIdCard } from "react-icons/fa";

const IndividualReport = () => {
  const tempReport = [
    {id:1,description:"Job Knowledge",rating:0},
    {id:2,description:"Quality of Work",rating:0},
    {id:3,description:"Productivity",rating:0},
    {id:4,description:"Communication Skills",rating:0},
    {id:5,description:"Teamwork/Collaboration",rating:0},
    {id:6,description:"Initiative",rating:0},
  ];
  const [report,setReport]  = useState(null);
  const empReport=useSelector((state)=>state.employees.empReport);
  useEffect(()=>{
    var tempArr = tempReport;
    for(let i=0; i<tempArr.length; i++){
      tempArr[i].rating = Math.floor(Math.random() * 4) + 5;
      let r = Math.floor(Math.random()*100) + 100;
      let g = Math.floor(Math.random()*100) + 90;
      let b = Math.floor(Math.random()*100) + 80;
      console.log(r," ",g," ",b);
      tempArr[i].bgColor = `rgb(${r.toString()},${g.toString()},${b.toString()})`;
      console.log(tempArr.rating);
    }
    console.log(tempArr)
    setReport(tempArr);
  },[]); 
  if(report===null){
    return <div className='mt-16'>...Loading</div>
  }
  return (
    <div className='mt-16 w-3/4 flex flex-col justify-start items-stretch bg-white rounded shadow p-2'>
      <div className='w-full flex flex-row px-1 space-x-2'>
        <div className='h-32 w-32 bg-black rounded-full'></div> 
        <div className='flex flex-col spac-y-2 text-blue-700'>
          <div className='flex flex-row space-x-3 items-baseline text-green-700'>
            <FaIdCard size={30} className='self-center'/>
            <span className='text-2xl font-bold'>{empReport.id}</span>
            <div className='flex flex-row space-x-1'><span className='text-xl'>{empReport.firstName}</span>
            <span className='text-xl'>{empReport.lastName}</span></div>            
          </div>  
          <div className='flex flex-row space-x-1 justify-start items-center font-semibold'>
            <HiOfficeBuilding size={20}/>
            <span>Departement</span>
            <span>:</span>
            <span>{empReport.department}</span>
          </div>        
          <div className='flex flex-row space-x-1 justify-start items-center font-semibold'>
            <IoIosPerson size={20}/>
            <span>Role</span>
            <span>:</span>
            <span>{empReport.jobRole}</span>
          </div>        
          <div className='flex flex-row space-x-1 justify-start items-center font-semibold'>
            <BsCalendarDate size={20}/>
            <span>Date Of Joining</span>
            <span>:</span>
            <span>{empReport.joining}</span>
          </div>        
          <div className='flex flex-row space-x-1 justify-start items-center font-semibold'>
            <IoMdMail size={20}/>
            <span>Email</span>
            <span>:</span>
            <span>{empReport.email}</span>
          </div>        
        </div>       
      </div>
      <div className='w-full border border-blue-500 my-4 rounded'></div>
      <div className='w-full flex flex-col justify-start items-stretch p-1'>
        <div className='flex flex-row justify-end space-x-1 text-sm text-blue-700'>
          <span>Reviews</span>
          <span>:</span>
          <span className='text-red-500'>{Math.floor(Math.random() * 6) + 14}</span>
        </div>
        <div className='flex flex-col w-full space-y-3'>
          {
            report.map((rate)=>{
              return <div key={rate.id} className='w-full flex flex-col space-y-3'>
                <div className='text-xl font-bold text-purple-700'>{rate.description}</div>
                <div className='flex flex-row justify-start items-stretch bg-gray-500 w-3/4 h-5 rounded-lg shadow-lg'>
                  <div className={`w-${rate.rating.toString()}010 rounded-l-lg flex flex-row justify-end shadow-lg`} style={{backgroundColor:`${rate.bgColor}`}}>
                    <span className='mr-2 text-sm text-white'>{rate.rating}</span>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default IndividualReport;
