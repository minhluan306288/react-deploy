import React from 'react'
import Sibar from './Sibar'
import MainBanner from './MainBanner'
import Promotion from './Promotion'

function Section1() {
  return (
    <div className='flex gap-5 justify-between'>
      <div className='col1'>
        <Sibar/>
      </div>
      <div className='col2'>
        <MainBanner/>
      </div>
      <div className='col2'>
        <Promotion/>
      </div> 
    </div>
  )
}

export default Section1