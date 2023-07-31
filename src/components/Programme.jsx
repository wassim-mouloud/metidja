import React from 'react'
import DaySlider from './DaySlider'

function Programme() {
  return (
    <div className='flex flex-col w-screen mx-auto ' >
        <p className='text-black font-bold text-[28px] lg:text-[40px] p-5  mx-auto' >Programme </p>
        <DaySlider day='Dimanche' />
        <DaySlider day='Lundi' />
        <DaySlider day='Mardi' />

    </div>
  )
}

export default Programme