import React, { useRef, useState, useEffect } from 'react'
import Company from '../components/Company'
function Prometteuses() {

  const [companies, setCompanies]= useState([0,1,2,3,4,5,6,7,8,9])
  const desktopSlider= useRef(null)
  
  const handlePrevious= ()=> {
    const sliderIndex=parseInt(getComputedStyle(desktopSlider.current).getPropertyValue("--slider-index"))
    if(sliderIndex===0){
        desktopSlider.current.style.setProperty("--slider-index", 3);
    }else{
        desktopSlider.current.style.setProperty("--slider-index", sliderIndex-1);
    }
}
const handleNext= ()=> {
    const sliderIndex=parseInt(getComputedStyle(desktopSlider.current).getPropertyValue("--slider-index"))
    if(sliderIndex===3){
        desktopSlider.current.style.setProperty("--slider-index", 0);
    }else{
        desktopSlider.current.style.setProperty("--slider-index", sliderIndex+1);
    }
}

  return (
    <div className='relative w-screen h-screen lg:h-[450px] flex flex-col lg:flex-row gap-20 px-7 items-center  justify-center bg-[#FF5300] py-2' >
        <img src="./images/lampa.png" alt=""  className='absolute top-0 left-[50%] lg:left-[7%] translate-x-[-50%] lg:translate-x-0 z-0  lg:h-[100%]'/>
        <div className='flex flex-col order-1 gap-8 lg:w-[530px] px-8 ' >
            <h2 className='relative text-white font-bold text-[38px]  text-center lg:text-left z-1 ' >Les plus prommeteuses</h2>
            <p className='relative text-white text-[20px] font-semibold text-center lg:text-left  z-1' >une liste soigneusement sélectionnée des dix entreprises les plus prometteuses de ce mois-ci, basée sur leur potentiel de croissance et leur capacité à innover dans leurs domaines respectifs</p>
        </div>
        <div className='flex  order-2 w-screen lg:w-[800px] z-[1] overflow-x-hidden flex-shrink-0 flex-grow-0 '>
          <div ref={desktopSlider} className='flex flex-grow-0 flex-shrink-0 w-full gap-3 overflow-x-scroll lg:overflow-visible slider' >
            {companies.map(company=>{
                return <Company/>
            })}
          </div>
        </div>
        <div  className={` absolute left-[600px] h-full w-[50px] hidden lg:flex  justify-center items-center z-[99] flex-shrink-0 flex-grow-0`} >
              <div onClick={handlePrevious} className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer' >
                <img src="./images/next.png" alt="" className='h-4 rotatey'/>
              </div>
          </div>
        <div className='absolute right-[10px]  h-full w-[50px] hidden lg:flex justify-center items-center z-[99] flex-shrink-0 flex-grow-0' >
            <div onClick={handleNext} className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer' >
              <img src="./images/next.png" alt="" className='h-4'/>
            </div>
          </div>


    </div>
  )
}

export default Prometteuses