import React from 'react'

function CarteEnseignant({nom, matiere}) {
  return (
    <div>
        <div className='relative h-[280px] w-[230px] rounded-[40px] border-[3px] border-[#306DC9] border-solid ' >
            <img src="./images/skender.png" alt="" className='absolute bottom-0 left-[50%] translate-x-[-50%] ' />
        </div>
        <p className='font-semibold text-center text-black' >{nom}</p>
        <p className='font-semibold text-[#306DC9] text-center' >{matiere}</p>
    </div>
  )
}

export default CarteEnseignant