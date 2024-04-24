import React from 'react'
import {Navbar,EmpCard} from '../index';
import { IoSearchOutline } from "react-icons/io5";
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { getEmployees } from '../../redux/actions/user';

// const employees = [
//   {
//     id:"EMP1003",
//     firstName: "Aarav",
//     lastName: "Patel",
//     email: "aarav.patel@company.com",
//     dob: "01/05/1990",
//     doj: "15/03/2015",
//     department: "IT",
//     jobRole: "Software Engineer"
//   },
//   {
//     id:"EMP1007",
//     firstName: "Saanvi",
//     lastName: "Shah",
//     email: "saanvi.shah@company.com",
//     dob: "12/09/1985",
//     doj: "22/07/2012",
//     department: "IT",
//     jobRole: "Data Analyst"
//   },
//   {
//     id:"EMP1013",
//     firstName: "Arjun",
//     lastName: "Kumar",
//     email: "arjun.kumar@company.com",
//     dob: "05/11/1987",
//     doj: "10/10/2010",
//     department: "IT",
//     jobRole: "Network Administrator"
//   },
//   {
//     id:"EMP1023",
//     firstName: "Aisha",
//     lastName: "Gupta",
//     email: "aisha.gupta@company.com",
//     dob: "17/03/1992",
//     doj: "05/06/2018",
//     department: "IT",
//     jobRole: "System Administrator"
//   },
//   {
//     id:"EMP1005",
//     firstName: "Advik",
//     lastName: "Singh",
//     email: "advik.singh@company.com",
//     dob: "25/08/1988",
//     doj: "30/04/2019",
//     department: "IT",
//     jobRole: "Database Administrator"
//   },
//   {
//     id:"EMP2003",
//     firstName: "Karan",
//     lastName: "Singh",
//     email: "karan.singh@company.com",
//     dob: "01/05/1990",
//     doj: "15/03/2015",
//     department: "Accounting",
//     jobRole: "Accountant"
//   },
//   {
//     id:"EMP2008",
//     firstName: "Arpit",
//     lastName: "Shah",
//     email: "arpit.shah@company.com",
//     dob: "12/09/1985",
//     doj: "22/07/2012",
//     department: "Accounting",
//     jobRole: "Auditor"
//   },
//   {
//     id:"EMP2013",
//     firstName: "Arjun",
//     lastName: "Pandey",
//     email: "arjun.pandey@company.com",
//     dob: "05/11/1987",
//     doj: "10/10/2010",
//     department: "Accounting",
//     jobRole: "Financial Analyst"
//   },
//   {
//     id:"EMP2001",
//     firstName: "Danish",
//     lastName: "Gupta",
//     email: "danish.gupta@company.com",
//     dob: "17/03/1992",
//     doj: "05/06/2018",
//     department: "Accounting",
//     jobRole: "Bookkeeper"
//   },
//   {
//     id:"EMP2011",
//     firstName: "Harpreet",
//     lastName: "Singh",
//     email: "harpreet.singh@company.com",
//     dob: "25/08/1988",
//     doj: "30/04/2019",
//     department: "Accounting",
//     jobRole: "Payroll Clerk"
//   }
// ];

const Home = () => {
  // const [employees, setEmployees] = useState([]);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getEmployees());      
    },[])
  const employees=useSelector((state)=>state.user.employees);  
  return (
    <div className='flex flex-col items-center w-full'>
      <Navbar/>
      <div className='flex flex-col w-3/4 mt-16 p-2 my-2'>
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
        <div className='w-full my-2 flex flex-row justify-center items-center flex-wrap'>
          {
            employees.map((emp)=>{
              return <EmpCard key={emp.empId} employee={emp}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
