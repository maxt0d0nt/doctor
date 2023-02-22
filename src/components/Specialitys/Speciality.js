import React from 'react';
import './Speciality.css';
import speciality from '../../models/Speciality';

const Speciality = () => {
    return (
        <>
            <div className='containerSpeciality'>
            <h1>Especialidades</h1>
                {speciality.map((item, index) => (
                    <div className="flip-card" key={index}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p className="title">{item.title}</p>
                            </div>
                            <div className="flip-card-back">
                                <p className="title">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Speciality