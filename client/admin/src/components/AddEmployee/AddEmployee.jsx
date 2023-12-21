import {useState} from 'react'
import TextInput from "./TextInput"
import { MdDelete } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import FileBase from 'react-file-base64';
import {notify} from '../index.js';
import { createEmployee } from '../../redux/actions/employees.js';
import {useDispatch} from 'react-redux';

const classes = {
    inputContainer :"flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2"
}

const AddEmployee = () => {
    const dispatch = useDispatch();
    const [emp,setEmp] = useState({
        firstName:"",
        lastName:"",
        empId:"",
        email:"",
        dob:"",
        doj:"",
        jobRole:"",
        department:"IT",
        imgUrl:null,
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const submitFunc=async()=>{
            await dispatch(createEmployee(emp));
            notify.success('New Employee added!')
            handleClear();
            return;
        }
        submitFunc();
    }
    const handleClear=()=>{
        setEmp({
            firstName:"",
            lastName:"",
            empId:"",
            email:"",
            dob:"",
            doj:"",
            jobRole:"",
            department:"IT",
            imgUrl:null,
        });        
    }
  return (
    <div className="m-2 p-2 text-blue-500 flex flex-col space-y-2 w-3/4 md:w-1/2 border-transparent rounded bg-white/75">
      <span className="font-bold m-2 mb-4">Add New Employee</span>      
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <div className='mb-3 flex flex-col justify-center items-center'>
            <div className='my-1 flex justify-center items-center h-32 w-32 rounded-full bg-black/50 overflow-hidden'>
                {(emp.imgUrl) && <img className='w-full h-full object-cover' src={emp.imgUrl}/> }        
            </div>
            <FileBase className='my-1' type='file' multiple={false} onDone={({base64})=>{setEmp({...emp,imgUrl:base64})}}/>
        </div>
        
        <div className={classes.inputContainer}>
            <TextInput type='text' name='firstName' label='First Name' value={emp.firstName} handleChange={(value)=>{setEmp({...emp,firstName:value})}}/>
            <TextInput type='text' name='lastName' label='Last Name' value={emp.lastName} handleChange={(value)=>{setEmp({...emp,lastName:value})}}/>
        </div>
        <div className={classes.inputContainer}>
            <TextInput type='text' name='employeeId' label='Employee Id' value={emp.empId} handleChange={(value)=>{setEmp({...emp,empId:value})}}/>    
            <TextInput type='email' name='email' label='Email Address' value={emp.email} handleChange={(value)=>{setEmp({...emp,email:value})}}/>    
        </div>
        <div className={classes.inputContainer}>
            <TextInput type='date' name='dob' label='Date of Birth' value={emp.dob} handleChange={(value)=>{setEmp({...emp,dob:value})}}/>      
            <TextInput type='date' name='doj' label='Date of Joining' value={emp.doj} handleChange={(value)=>{setEmp({...emp,doj:value})}}/>      
        </div>
        <div className={classes.inputContainer}>
        <TextInput type='text' name='role' label='Job Role' value={emp.jobRole} handleChange={(value)=>{setEmp({...emp,jobRole:value})}}/>     
        <div className="relative z-0 w-full mb-5 group">
            <select name="department" defaultValue="IT" id="department" onChange={(e)=>{setEmp({...emp,department:e.target.value})}} className="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
                <option value="IT">IT</option>
                <option value="Accounting">Accounting</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
            </select>
            <label htmlFor="department" className="peer-focus:font-medium absolute text-sm text-blue-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
        </div>
        </div>
        <div className="flex  space-x-2">
            <button onClick={handleClear}  className="flex flex-row justify-center items-center space-x-1 bg-red-500 w-1/2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <MdDelete size={20}/><span>Clear</span>
            </button>
            <button type="submit" className="flex flex-row justify-center items-center space-x-1 bg-blue-500 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <IoPersonAdd size={20}/><span>Employee</span>                
            </button>
        </div>
        
      </form>
    </div>
  )
}

export default AddEmployee
