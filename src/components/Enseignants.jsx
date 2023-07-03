import React from 'react'
import CarteEnseignant from './CarteEnseignant'
function Enseignants() {

    const teachers=[0,1,2,3,4,5,6,7,8,9,10]

  return (
    <div className='flex flex-col items-center gap-[100px] mt-[60px] ' >
        <p className='text-black font-bold text-[28px] lg:text-[40px] mb-6' >Nos enseignants</p>
        <div className='grid grid-cols-1 gap-[100px] lg:gap-x-[50px] lg:gap-y-[100px] lg:grid-cols-4' >
            {teachers.map((teacher, i)=>{
                return(
                   <CarteEnseignant key={i}  nom='Skander' matiere='Philosophie'/>
                )
            })}
       
        </div>
    </div>
  )
}

export default Enseignants