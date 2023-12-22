// import React from 'react'
import { IoIosPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const About = () => {
    const about={
        title:'Employee Review System',
        para:'Employee Review System is our (Group 65) capstone project which provides the employees to review each other in a team and to encourage self growth by the feedback from their teammates.',
        team:[
            {
                name:'Shailendra Singh',
                reg:'20BCE10281',
                email:'shailendra.singh2020@vitbhopal.ac.in'
            },
            {
                name:'Ankit Priyadarshi',
                reg:'20BCE10486',
                email:'ankit.priyadarshi2020@vitbhopal.ac.in'
            },
            {
                name:'Deepak Maurya',
                reg:'20BCE10727',
                email:'deepak.maurya2020@vitbhopal.ac.in'
            },
            {
                name:'Ayush Bhatt',
                reg:'20BCE10256',
                email:'ayush.bhatt2020@vitbhopal.ac.in'
            },
        ],
        progress:[
            'Create-Read-Update-Delete operations on employee profile from admin portal.',
            'Action Response notifications.',
            'Dummy Issue page to demonstrate the proposed solution.',
        ],
        todo:[
            'Setting up review system in employee/user side.',
            'Setting up issue system in employee/user side.',
        ]
    }
  return (
    <div className='bg-sky-900 text-slate-200 w-3/4 mt-16 flex flex-col justify-start items-start rounded-md p-3 px-8 space-y-2'>
        <span className='text-xl font-bold self-center'>{about.title}</span>
        <p className='text-justify'><span className='font-bold'>Summary:&nbsp;</span><span>{about.para}</span></p>    
        <div className='flex flex-col justify-start items-start space-y-2'>
            <span className='font-bold'>Team Members:</span>
                <div className='flex flex-col space-y-2'>
                {
                    about.team.map((member)=>{
                        return <div key={member.reg} className='ml-4 flex flex-col space-y-1'>
                            <div className='flex flex-row space-x-1 items-baseline'><IoIosPerson size={20}/><span>{member.name}</span><span className='text-sm font-bold'>({member.reg})</span></div>                        
                            <div className="flex flex-row space-x-1 items-center"><MdEmail size={20}/><span>contact:&nbsp;</span><span>{member.email}</span></div>                        
                        </div>
                    })
                }
                </div>
        </div>
        <div className="flex flex-col space-y-1">
            <span className="font-bold">Progress:</span>
            <div className="flex flex-col space-y-1 pl-2">
                {
                    about.progress.map((prog,key)=>{
                        return <p key={key}>{prog}</p>
                    })
                }
            </div>
        </div>
        <div className="flex flex-col space-y-1">
            <span className="font-bold">Todo:</span>
            <div className="flex flex-col space-y-1 pl-2">
                {
                    about.todo.map((prog,key)=>{
                        return <p key={key}>{prog}</p>
                    })
                }
            </div>
        </div>
        <div className="bg-black/50 w-full p-4 rounded-md">
            <span className="font-bold text-slate-300">Feel free to connect with us.</span>
            <form className="my-4 flex flex-col space-y-3"action="https://getform.io/f/6cd7a44b-2d0d-4ca5-9571-8519c0e7e8f3" method="POST">
                <div className="flex flex-row justify-center space-x-2">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-slate-200 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-blue-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-slate-200 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-blue-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email
                    </label>
                </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-slate-200 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-blue-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Message
                    </label>
                </div>
                <button type="submit" className="self-center my-2 flex flex-row justify-center items-center space-x-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <IoIosSend size={20}/><span>Send</span>              
                </button>
            </form>
        </div>
    </div>
  )
}

export default About
