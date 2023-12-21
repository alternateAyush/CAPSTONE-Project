import React from 'react'
import Issue from './Issue'


const issueArr=[
    {
        _id:1,
        people:[
            {id:'EMP1001',name:'John'},
            {id:'EMP1003',name:'Jack'},
            {id:'EMP1005',name:'Arun'},
        ],
        raisedBy:{
            id:'EMP1004',
            name:'Ayush'
        },
        date:'20231201',
        description:'Non complaince to team work',
        important:true,
    },
    {
        _id:2,
        people:[
            {id:'EMP1011',name:'Varun'},
            {id:'EMP1013',name:'Ajay'},
        ],
        raisedBy:{
            id:'EMP1014',
            name:'Shailendra'
        },
        date:'20231207',
        description:'Non complaince to team work',
        important:false,
    },
    {
        _id:3,
        people:[
            {id:'EMP1001',name:'John'},
        ],
        raisedBy:{
            id:'EMP1007',
            name:'Ankit'
        },
        date:'20231210',
        description:'Non complaince to team work',
        important:false,
    },
];

const Issues = () => {
  return (
    <div className='flex flex-col space-y-2 m-3 w-full'>
        {
            issueArr.map((issue)=>{
                return <Issue key={issue._id} issue={issue}/>
            })
        }      
    </div>
  )
}

export default Issues
