import React from 'react';
import {motion} from 'framer-motion'

const Galerie = () => {
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, 
                transition:{
                    duration:2
                }
        }
      }
    return (
        <div className='flex flex-col items-center mt-10 md:px-4 ' >
            <motion.p initial="hidden" whileInView="show" viewport={{once:true}} variants={item} className='text-black font-bold text-[28px] lg:text-[40px] p-5 lg:p-8' >Galerie</motion.p>
            <div className="flex gap-2 w-4/5 mx-auto max-lg:flex-col max-lg:w-70% max-lg:items-center max-lg:justify-center ">
                <div className="flex-1 h-96 flex gap-2 max-sm:h-64 max-lg:w-70% max-lg:justify-center max-lg:items-center max-lg:h-80 max-xs:w-full">
                    <img src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg" alt="" className="object-cover w-full h-full rounded-md max-lg:h-80 max-sm:h-64 " />
                </div>
                <div className="flex-1 flex h-96  gap-2 max-sm:flex-col  max-lg:w-70% max-lg:justify-center max-lg:items-center max-lg:h-80 max-xs:w-full">
                    <div className="flex flex-col justify-between w-3/5 h-full gap-2 max-lg:h-80 max-sm:w-full max-sm:h-full ">
                        <div className="h-57% max-sm:h-full">
                            <img src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg" alt="" className="object-cover w-full h-full rounded-md max-sm:h-64 " />
                        </div>
                        <div className="h-2/5 max-sm:h-full">
                            <img src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg" alt="" className="object-cover w-full h-full rounded-md max-sm:h-64 " />
                        </div>
                    </div>
                    <div className="w-2/5 max-lg:h-80 max-sm:w-full max-sm:h-80">
                        <img src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg" alt="" className="object-cover w-full h-full rounded-md max-sm:h-64 " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galerie;