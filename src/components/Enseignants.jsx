import React from 'react'
import CarteEnseignant from './CarteEnseignant'
import Galerie from './Galerie'
import {motion} from 'framer-motion'
function Enseignants() {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, 
            transition:{
                duration:2
            }
    }
  }

    const teachers=[0,1,2,3,4,5,6,7,8,9,10,11]

  return (
    <div className='flex flex-col items-center gap-[100px] md:px-4 mt-10 ' >
        <motion.p initial="hidden" whileInView="show" viewport={{once:true}} variants={item} className='text-black font-bold text-[28px] lg:text-[40px] p-5 lg:p-8' >Nos enseignants</motion.p>
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