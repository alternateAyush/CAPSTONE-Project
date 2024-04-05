import React from 'react'

const imgLink = "https://connectkaro.org/wp-content/uploads/2019/03/placeholder-profile-male-500x500.png";
const EmpCard = (props) => {
  const employee=props.employee;
  return (
    <div className="flex flex-col cursor-pointer justify-start items-stretch w-64 m-2 shadow-md shadow-gray-700 rounded-md border border-transparent hover:border hover:border-black">
        <div className='w-full h-64 flex justify-center items-center rounded-t-md'>
            <img src={imgLink} className='w-full h-full object-cover rounded-t-md'/>           
        </div>  
        <div className='my-2 w-full flex flex-col justify-start items-center'>
            <span className='font-bold text-lg'><span>{employee.firstName}</span>&nbsp;<span>{employee.lastName}</span></span>
            <span className='text-sm text-gray-800'>{employee.id}</span>
        </div>    
    </div>
  )
}

export default EmpCard
