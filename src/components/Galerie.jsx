import React from 'react';
import '../Galerie.css'
import IMG from "../avengers.webp"
const Galerie = () => {
    return (<>

        <section className='GalerieSec'>
            <h2>
                Galeries
            </h2>
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