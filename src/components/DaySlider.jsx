import React, { useRef, useState } from 'react'

function DaySlider({day}) {
    const [cartes, setCartes]= useState([0,1,2,3,4,5,6,7,8,9,10,11])
    const [index, setIndex]= useState(0)
    const sliderRef= useRef(null)

    const handlePrev= ()=>{
        let size = sliderRef.current.offsetWidth;
        let newIndex = index === 0 ? -2 : index + 1;
        setIndex(newIndex);        
        sliderRef.current.style.transition = 'transform 0.5s linear';
        sliderRef.current.style.transform = 'translateX(' + (size * newIndex) + 'px)';
    }
    const handleNext= ()=>{
        let size = sliderRef.current.offsetWidth;
        let newIndex = index === -2 ? 0 : index - 1;
        setIndex(newIndex);
        sliderRef.current.style.transition = 'transform 0.5s linear';
        sliderRef.current.style.transform = 'translateX(' + (size * newIndex) + 'px)';    }
  return (
    <div className='w-screen pl-4' >
        <p className='text-[24px] text-black font-semibold' >{day}</p>
        <div className='relative w-full overflow-hidden' >
            <div onClick={handlePrev} className='z-[99] h-full w-[40px] bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.5)] transition-all duration-200 absolute left-0 top-0 hidden lg:block rounded-l-md' ></div>
            <div ref={sliderRef} className='flex w-full gap-2 pb-4 overflow-x-scroll lg:pb-0 lg:overflow-x-visible' >
                        {cartes.map((carte, index)=>{
                            return(
                                <div key={index} className={`flex-shrink-0 bg-[#306DC9] rounded-md h-[150px] w-[calc(100%/4-8px)]`} >{index}</div>
                            )
                        })}

            </div>
            <div onClick={handleNext} className='z-[99] h-full w-[40px] bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.5)] transition-all duration-200 absolute right-0 top-0 hidden lg:flex ' ></div>

        </div>
    </div>
  )
}

export default DaySlider