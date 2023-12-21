import React from 'react'
import Issues from './Issues'

const IssuePage = () => {
  return (
    <div className='z-0 m-14 p-2 flex flex-col items-center w-3/4 bg-white/50 rounded'>
        <div>Search</div>
        <Issues/>              
    </div>
  )
}

export default IssuePage
