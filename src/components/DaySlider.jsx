import React, { useState } from 'react'

function DaySlider({day}) {
    const [cartes, setCartes]= useState([0,1,2,3,4,5,6,7,8])
  return (
    <div className='w-screen pl-4' >
        <p className='text-[24px] text-black font-semibold' >{day}</p>
        <div className='w-full' >
            <div className='flex w-full gap-2 overflow-x-scroll' >
                        {cartes.map((carte, index)=>{
                            return(
                                <div key={index} className='flex-shrink-0 bg-[#306DC9] rounded-md h-[150px] w-[calc(100%/3-12px)]' ></div>
                            )
                        })}

            </div>

        </div>
    </div>
  )
}

export default DaySlider