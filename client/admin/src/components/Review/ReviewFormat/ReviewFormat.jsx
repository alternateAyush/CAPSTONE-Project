import React from 'react'
import { useState} from 'react';
import { Switch,Input,Button } from "@material-tailwind/react";
import { notify } from '../..';

const ReviewFormat = () => {
  const [reviewForm,setReviewForm] = useState([
    {
      id:1,
      title:"Criterion 1",
      description:"",
      enabled:false,      
    },
    {
      id:2,
      title:"Criterion 2",
      description:"",
      enabled:false,      
    },
    {
      id:3,
      title:"Criterion 3",
      description:"",
      enabled:false,      
    },
    {
      id:4,
      title:"Criterion 4",
      description:"",
      enabled:false,      
    },
    {
      id:5,
      title:"Criterion 5",
      description:"",
      enabled:false,      
    },
    {
      id:6,
      title:"Criterion 6",
      description:"",
      enabled:false,      
    },
    {
      id:7,
      title:"Criterion 7",
      description:"",
      enabled:false,      
    },
    {
      id:8,
      title:"Criterion 8",
      description:"",
      enabled:false,      
    },
    {
      id:9,
      title:"Criterion 9",
      description:"",
      enabled:false,      
    },
    {
      id:10,
      title:"Criterion 10",
      description:"",
      enabled:false,      
    },
  ])
  const handleValueChange = (event,id)=>{
    let newArr = new Array(reviewForm.length);
    for(let i=0; i<reviewForm.length; i++){
      newArr[i]=reviewForm[i];
      if(reviewForm[i].id===id){
        newArr[i].description=event.target.value;
      }
    }
    console.log(newArr);
    setReviewForm(newArr);
  }
  const toggleEnabled = (id) =>{
    let newArr = new Array(reviewForm.length);
    for(let i=0; i<reviewForm.length; i++){
      newArr[i]=reviewForm[i];
      if(reviewForm[i].id===id){
        newArr[i].enabled = !reviewForm[i].enabled;
      }
    }
    console.log(newArr);
    setReviewForm(newArr);
  }
  const handleClear = () =>{
    let newArr = new Array(reviewForm.length);
    for(let i=0; i<reviewForm.length; i++){
      newArr[i]=reviewForm[i];
      newArr[i].description="";
      newArr[i].enabled=false;
    }
    console.log(newArr);
    setReviewForm(newArr);
  }
  const handleSubmit = ()=>{
    let count = 0;
    for(let i=0; i<reviewForm.length; i++){
      if(reviewForm[i].enabled===true){
        count++;
      }
    }
    if(count===0){
      notify.error("Atleast 1 criterion must be enabled!");
      return;
    }
    notify.success("Review format saved successfully!")
  }
  return (
    <div className='mt-16 flex flex-col p-2 overflow-y-hidden border rounded w-1/2 bg-white'>
      <div className='p-2 w-full flex justify-center items-center'>
        <h1>Create a customized review form as per your need.</h1>
      </div>
      <form className='flex flex-col w-full'>
        {
          reviewForm.map((rFormat)=>{
            return <div key={rFormat.id} className='flex flex-row justify-around w-full overflow-hidden'>
            <div className="w-3/4 my-2">
                <Input label={rFormat.title} value={rFormat.description} color='blue' onChange={(e)=>{handleValueChange(e,rFormat.id)}} disabled={!rFormat.enabled}/>
            </div>
            <Switch checked={rFormat.enabled} onClick={()=>toggleEnabled(rFormat.id)} color='blue'/>
        </div>
          })
        }
        
        <div className='w-full my-2 flex flex-row justify-around'>
          <Button className='w-1/3' variant="outlined" onClick={handleClear}>Clear</Button>
          <Button className='w-1/3' color='blue' onClick={handleSubmit}>Save</Button>
        </div>
          
      </form>
    </div>
  )
}

export default ReviewFormat
