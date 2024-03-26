import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import {useDispatch} from 'react-redux';
import {setEmpReport} from '../../../redux/actions/employees';
import {useNavigate} from 'react-router-dom';


const ReviewReport = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  
  const handleClick = (e,emp)=>{
    console.log(emp);
    dispatch(setEmpReport(emp));
    return navigate("/review/individual")
  }
  const employees = [
    { id:"EMP1003", firstName: "Aarav", lastName: "Kumar", email: "aarav.kumar@example.com", department: "IT", jobRole: "Software Engineer", joining: "21/05/2018" },
    { id:"EMP1002", firstName: "Aisha", lastName: "Patel", email: "aisha.patel@example.com", department: "IT", jobRole: "Systems Analyst", joining: "12/04/2019" },
    { id:"EMP1004", firstName: "Aditi", lastName: "Sharma", email: "aditi.sharma@example.com", department: "IT", jobRole: "Network Administrator", joining: "27/03/2017" },
    { id:"EMP1012", firstName: "Arjun", lastName: "Singh", email: "arjun.singh@example.com", department: "IT", jobRole: "Database Administrator", joining: "11/11/2015" },
    { id:"EMP1009", firstName: "Ishaan", lastName: "Verma", email: "ishaan.verma@example.com", department: "IT", jobRole: "Web Developer", joining: "05/10/2020" },
    { id:"EMP1016", firstName: "Khushi", lastName: "Gupta", email: "khushi.gupta@example.com", department: "IT", jobRole: "Security Analyst", joining: "10/08/2018" },
    { id:"EMP1011", firstName: "Rohan", lastName: "Choudhary", email: "rohan.choudhary@example.com", department: "IT", jobRole: "IT Support Specialist", joining: "12/09/2017" },
    { id:"EMP1013", firstName: "Sneha", lastName: "Joshi", email: "sneha.joshi@example.com", department: "IT", jobRole: "Software Tester", joining: "19/01/2021" }
];

  return (
    <div className='mt-16 mb-2 p-2 w-2/3 flex flex-col justify-start items-center'>
        <div className='w-1/2'></div>    
        <div className='w-full flex flex-row flex-wrap justify-around items-stretch'>
          {
            employees.map((emp)=>{
              return <div key={emp.id} onClick={(e)=>handleClick(e,emp)} className='relative flex flex-col justify-between items-center space-y-2 p-2 mx-1 my-2 rounded-md shadow-md cursor-pointer shadow-blue-300 bg-white w-64'>
                <div className='w-full h-60 bg-gray-600 rounded-md'></div>
                <div className='flex flex-col space-y-1 w-full items-stretch'>
                <div className='w-full flex flex-row flex-wrap justify-center border-b border-blue-200 items-center space-x-1 font-bold text-blue-500'>
                  <span>{emp.id}</span>
                  <span>|</span>
                  <span>{emp.firstName}</span>
                  <span>{emp.lastName}</span>
                </div>
                <div className='w-full flex flex-row flex-wrap justify-center items-center space-x-1 font-bold text-blue-500'>
                  <span>{emp.jobRole}</span>
                </div>
                <div className='w-full flex flex-row flex-wrap justify-center items-center space-x-1 text-blue-500'>
                  <span>Department</span>
                  <span>:</span>
                  <span>{emp.department}</span>
                </div>
                </div>
                <div className='w-full flex flex-row text-sm flex-wrap justify-center items-center self-end space-x-1 text-blue-500'>
                  <MdOutlineMail size={15}/>
                  <span>{emp.email}</span>
                </div>                
              </div>
            })
          }
        </div>    
    </div>
  )
}

export default ReviewReport;
