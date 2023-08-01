import React, { useState } from 'react'
import {motion} from 'framer-motion'

function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, 
                transition:{
                    duration:1
                }
        }
      }


  return (
    <div className='flex flex-col items-center justify-center gap-8 lg:mb-[30px] lg:mt-[50px]' >
        <div className='flex flex-col lg:flex-row lg:justify-between  w-screen md:w-[80vw] lg:w-[90vw] lg:mx-auto gap-6 p-6 lg:p-0 ' >
            <motion.div initial={{x:-300, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{duration:0.7}} className='flex flex-col items-center gap-6 lg:items-start ' >
                <motion.h1   className='text-black text-center lg:text-left font-bold text-[28px] md:text-[40px] lg:text-[50px] ' >
                    Première plateforme de <span className='text-[#306DC9]' >financement</span> pour les startups en Algérie
                </motion.h1>
                <motion.p  className='text-center  lg:text-left text-[#808080] text-[12px] md:text-[16px] lg:text-[20px] font-semibold w-[80%]' >Démarrez et gérez une collecte de fonds professionnelle
                    pour attirer des investisseurs qualifiés et accrédités de qualité.
                </motion.p>
                <motion.div  className='flex gap-6 lg:gap-8 md:gap-14' >
                    <button className={`b1 font-semibold text-[12px] text-white lg:text-[14px]  hover:text-[#306DC9] flex justify-center items-center w-[160px] lg:w-[190px] h-[45px] bg-[#306DC9] hover:bg-white rounded-md transition-all duration-300 border border-solid   hover:border-[#306DC9]  `} >Reserver maintenant</button>
                    <button className={`b2 font-semibold text-[12px] lg:text-[14px] text-[#306DC9] hover:text-white flex justify-center items-center w-[160px] lg:w-[190px] h-[45px] bg-white hover:bg-[#306DC9] rounded-md border-[1px] border-solid border-[#306DC9] hover:border-white transition-all duration-300 `} >Voir le planning</button>
                </motion.div>
            </motion.div>
            <motion.img initial={{x:300, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{duration:0.7}} src="./images/classe.png" alt="rocket launch" className='w-full max-h-[500px] my-auto md:w-full md:h-[500px]  lg:h-[462px]' />
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={container}  className='flex w-full md:w-[80%] lg:w-[90%] items-center justify-between lg:justify-center gap-3 lg:gap-[250px] mx-auto p-6 lg:p-0 ' >
            <motion.div  viewport={{once:true}} variants={item} className='items-center justify-center hidden gap-4 md:flex'>
                <img src="./images/enseignant.png" alt="" className='h-[30px] w-[30px]'/>
                <div>
                    <p className='text-[#306DC9] font-bold block' >+32</p>
                    <p className='text-black font-bold text-[12px]' >Enseignants qualifiés</p>
                </div>
            </motion.div>
            <motion.div viewport={{once:true}} variants={item} className='flex items-center justify-center gap-4'>
                <img src="./images/réussite.png" alt="" className='h-[30px] w-[30px]'/>
                <div>
                    <p className='text-[#306DC9] font-bold '>90%</p>
                    <p className='text-black font-bold text-[12px]' >Taux de réussite</p>
                </div>
            </motion.div>
            <motion.div  viewport={{once:true}} variants={item} className='flex items-center justify-center gap-4'>
                <img src="./images/eleves.png" alt="" className='h-[30px] w-[30px]'/>
                <div>
                    <p className='text-[#306DC9] font-bold '>+10000</p>
                    <p className='text-black font-bold text-[12px]' >Elèves chaque année</p>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Hero