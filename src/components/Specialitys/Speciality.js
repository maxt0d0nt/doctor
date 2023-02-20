import React from 'react';
import './Speciality.css';

const speciality = [
    {
        title: "Odontologia",
        description: "corona, caries, Extracciones, amalgamas, prótesis, radiografías periapicales"
    },

    {
        title: "Medicina General",
        description: "chequeo general, tratamientos, analisis de examenes"
    },

    {
        title: "Ecosonografia",
        description: "Ginecologico, Obstetrico, Morfológio, Abdominal, Renal, Mamario, Testicular, Prostatico, Doppler"
    }
]


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