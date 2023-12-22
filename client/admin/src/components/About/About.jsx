// import React from 'react'
import { IoIosPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const About = () => {
    const about={
        title:'Employee Review System',
        para:'Employee Review System is our (Group 65) capstone project which provides the employees to review each other in a team and to encourage self growth by the feedback from their teammates.',
        team:[
            {
                name:'Shailendra Singh',
                reg:'20BCE10281',
                email:'shaildendra.singh2020@vitbhopal.ac.in'
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
    </div>
  )
}

export default About
