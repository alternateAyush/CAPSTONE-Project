// import React from 'react'
import {Navbar,Home,AddEmployee,Search} from './components/index.js';
import { Routes,Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
    <div className='flex flex-col items-center overflow-x-hidden'>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addEmployee' element={<AddEmployee/>}/>
          <Route path='/search' element={<Search/>}/>
          {/* <Route path='/auth' element={<Auth/>}/> */}
        </Routes>   
    </div>
    </BrowserRouter>
  )
}

export default App
