import React from 'react'
import DaySlider from './DaySlider'
import {motion} from 'framer-motion'

function Programme() {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, 
            transition:{
                duration:1
            }
    }
  }
  return (
    <div className='flex flex-col w-screen mx-auto ' >
        <motion.p inital='hidden' whileInView="show" viewport={{once:true}} variants={item} className='text-black font-bold text-[28px] lg:text-[40px] p-5  mx-auto' >Programme </motion.p>
        <DaySlider day='Dimanche' />
        <DaySlider day='Lundi' />
        <DaySlider day='Mardi' />

    </div>
  )
}

export default Programme