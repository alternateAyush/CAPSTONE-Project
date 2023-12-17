// import React from 'react'
import {Navbar,Home} from './components/index.js';
import { Routes,Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/auth' element={<Auth/>}/> */}
        </Routes>   
    </div>
    </BrowserRouter>
  )
}

export default App
