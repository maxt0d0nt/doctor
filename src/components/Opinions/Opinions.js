import React from 'react';
import './Opinions.css'
import Slider from 'react-slick';

const Opinions = () => {

    const Opinions = [
        {
            title: "super atentos",
            description: "Tuve dos consultas con la Dra. me escuchó atentamente, me explicó todo sobre mi problema, fue muy amable y paciente.",
            date: "Mayo 06, 2022"
        },
        {
            title: "recomiendo 100%",
            description: "la mejor atencion lo recomiendo",
            date: "Marzo 25, 2022"
        },
        {
            title: "Profesionales ante todo",
            description: "Profesionalidad, amabilidad y accesibilidad. Tres factores que personalmente valoro mucho. Muchas gracias.",
            date: "Septiembre 29, 2022"
        },
        {
            title: "Confianza",
            description: "Sincera, cercana. Una doctora que da confianza. La recomiendo 100%",
            date: "Enero 17, 2022"
        },
        {
            title: "primera pero no ultima",
            description: "Es la primera consulta con la doctora, atención perfecta. Muy profesional.",
            date: "Mayo 12, 2022"
        },
    ]

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        dots: true,

    };

    return (
        <>
            <div className="opinionContainer">
                <div className='Carrusel'>
                    <Slider {...settings}>
                        {Opinions.map((item, index) => {
                            return (
                                <div className='card-container'>
                                    <div class="card" key={index}>
                                        <h3 class="card__title">{item.title}</h3>
                                        <p class="card__content">{item.description}</p>
                                        <div class="card__date">
                                            {item.date}
                                        </div>
                                        <div class="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Opinions