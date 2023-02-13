import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className='container'>
         
                <div className='mainName'>
                    Consultorios
                    <br></br>
                    Yolanda Delgado
                </div>
                <div className='mainPhrase'>
                    Por que tu Salud 
                    <br></br>
                    es lo mas importante
                </div>
                <div className='mainLinks'>
                    <button className='btn'  id='btn-up'>Odontologia</button>
                    <button className='btn' id='btn-dwn'>Ecosonografia</button>
                </div>
            </div>

        </>
    )
}

export default Hero