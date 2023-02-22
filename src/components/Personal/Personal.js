import React from 'react';
import './Personal.css';
import personal from '../../models/Personal';
import img1 from '../../assets/img/humberto-chavez-FVh_yqLR9eA-unsplash 1.png'


const Personal = () => {
    return (
        <>
            <div className='personal-container'>
                <div className='title-personal'>
                    <h2>NUESTRO PERSONAL</h2>
                </div>

                {personal.map((item, index) => {
                    return (
                        <div className="card-personal" key={index}>
                            <div className="img">
                                <img src={img1} alt="img" />
                            </div>
                            <div className="textBox">
                                <p className="text head">
                                    {item.name}
                                </p>
                                <span>
                                    {item.time}
                                </span>
                                <p className="text price">
                                    {item.about}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Personal