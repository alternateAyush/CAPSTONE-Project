// import React from 'react'
import {Navbar,Home,AddEmployee,Search,IssuePage,About,Review,ReviewFormat,ReviewReport,IndividualReport} from './components/index.js';
import { Routes,Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
    <div className='relative flex flex-col items-center overflow-x-hidden'>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addEmployee' element={<AddEmployee/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/review/format' element={<ReviewFormat/>}/>
          <Route path='/review/report' element={<ReviewReport/>}/>
          <Route path='/review/individual' element={<IndividualReport/>}/>
          <Route path='/editEmployee' element={<AddEmployee/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/issues' element={<IssuePage/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/auth' element={<Auth/>}/> */}
        </Routes>   
    </div>
    </BrowserRouter>
  )
}

export default App
