import React from 'react';
import './Hero.css';
import circles from '../../assets/img/circles.svg';

const Hero = () => {
    return (
        <>
            <div className='container'>
             <img src={circles} alt='circles' />
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
                    <button className='btn'>Odontologia</button>
                    <button className='btn' id='btn-dwn'>Ecosonografia</button>
                </div>
            </div>

        </>
    )
}

export default Hero