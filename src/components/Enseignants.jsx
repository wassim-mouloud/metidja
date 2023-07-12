import React from 'react'
import CarteEnseignant from './CarteEnseignant'
import Galerie from './Galerie'
function Enseignants() {

    const teachers=[0,1,2,3,4,5,6,7,8,9,10,11]

  return (
    <div className='flex flex-col items-center gap-[100px] md:px-4  ' >
        <p className='text-black font-bold text-[28px] lg:text-[40px] p-5 lg:p-8' >Nos enseignants</p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[100px] lg:gap-x-[50px] lg:gap-y-[100px]   ' >
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