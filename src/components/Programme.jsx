import React from 'react'
import DaySlider from './DaySlider'

function Programme() {
  return (
    <div className='flex flex-col w-screen mx-auto gap-[100px] ' >
        <p className='text-black font-bold text-[28px] lg:text-[40px] p-5 lg:p-8 mx-auto' >Programme </p>
        <DaySlider day='Dimanche' />

    </div>
  )
}

export default Programme