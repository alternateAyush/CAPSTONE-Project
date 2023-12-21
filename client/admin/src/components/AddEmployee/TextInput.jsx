import React from 'react'

const TextInput = ({type,name,label,value,handleChange}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
        <input type={type } name={name} id={name} value={value} onChange={(e)=>{handleChange(e.target.value)}} className="block py-2.5 px-0 w-full text-sm text-blue-900 bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor={name} className="peer-focus:font-medium absolute text-sm text-blue-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
    </div>
  )
}

export default TextInput
