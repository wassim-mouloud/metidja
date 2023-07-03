import React from 'react'

function Company() {
  return (
    <div className='flex flex-col items-center gap-3 w-[85vw] lg:w-[calc(800px/3-12px)] h-[380px] lg:h-[355px] bg-white rounded-[10px] flex-shrink-0 last:mr-4 first:ml-4 lg:first:ml-0 z-[99]' >
        <img src="./images/apple.webp" alt="" className='w-full h-[40%] object-cover rounded-[10px]' />
        <div className='flex flex-col items-start gap-3 px-2 w-[90%] lg:w-full ' >
            <p className='text-[18px] font-bold text-[#FF5300]' >Facebook : reseau social </p>
            <p className='text-black font-semibold text-[11px] lg:text-[12px]' >Meta Platforms, Inc., plus connue sous le nom commercial Meta, est une société américaine créée en 2004 par Mark Zuckerberg. Elle est un des géants du Web, regroupés sous l'acronyme GAFAM</p>
            <div className='w-full ' >
                <p className='text-[12px] font-bold text-[#FF5300] py-1 ' >78% du fond levé</p>
                <div className='relative progress w-full rounded-md bg-[#D1D1D1] h-[7px]' />
            </div>
        </div>
    </div>
  )
}

export default Company