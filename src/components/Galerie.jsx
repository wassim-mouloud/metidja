import React from 'react';
import '../Galerie.css'
import IMG from "../avengers.webp"
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
    return (<>

        <section className='GalerieSec'>
            <motion.h2 initial="hidden" whileInView="show" viewport={{once:true}} variants={item} className='ftext-black font-bold text-[28px] lg:text-[40px]  p-5 lg:p-8 ' >
                Galerie
            </motion.h2>
            <div className='Galeries'>
                <div className='BigDivImg'>
                    <img src={IMG} alt="" />
                </div>
                <div className='GridDivImg'>
                    <div className='doubleImg Imgs1'>
                        <img src={IMG} alt="" />
                        <img src={IMG} alt="" />
                    </div>
                    <div className='doubleImg Imgs2'>
                        <img src={IMG} alt="" />
                        <img src={IMG} alt="" />
                    </div>
                    <div className='doubleImg Imgs3'>
                        <img src={IMG} alt="" />
                        <img src={IMG} alt="" />
                    </div>
                </div>
                <div className='ResponsiveImgs'>
                    <img src={IMG} alt="" />
                    <img src={IMG} alt="" />
                    <img src={IMG} alt="" />
                    <img src={IMG} alt="" />
                    <img src={IMG} alt="" />
                    <img src={IMG} alt="" />
                </div>
            </div>
        </section>

    </>);
}

export default Galerie;