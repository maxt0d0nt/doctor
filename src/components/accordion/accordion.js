import React from 'react';
import "./Accordion.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const Accordion = () => {

  const AccordionItems = [
    {
      id: "flush-headingOne",
      data: "#flush-collapseOne",
      id_aria: "flush-collapseOne",
      title: "Personal de atención excepcional",
      description: "si sus médicos y enfermeros son amables, compasivos y brindan un servicio excepcional, los pacientes se sentirán más cómodos y valorados."
    },
    {
      id: "headingTwo",
      data: "#collapseTwo",
      id_aria: "collapseTwo",
      title: "Conveniencia",
      description: "si su consultorio está convenientemente ubicado y ofrece horarios flexibles, los pacientes podrán acceder a sus servicios de manera más fácil."
    },
    {
      id: "headingThree",
      data: "#collapseThree",
      id_aria: "collapseThree",
      title: "Calidad de atención médica",
      description: "si su consultorio ofrece una atención médica de alta calidad y utiliza tecnología avanzada, los pacientes tendrán más confianza en el tratamiento que reciben"
    },
    {
      id: "headingFour",
      data: "#collapseFour",
      id_aria: "collapseFour",
      title: "Reputación",
      description: "si su consultorio tiene una buena reputación en la comunidad, los pacientes estarán más inclinados a elegirlo sobre otros"
    },
    {
      id: "headingFive",
      data: "#collapseFive",
      id_aria: "collapseFive",
      title: "Precios Razonables",
      description: "si su consultorio ofrece precios razonables y opciones de pago asequibles, los pacientes estarán más dispuestos a elegir su consultorio sobre otros"
    }
  ]

  return (
    <>
   <div className='containerMainAccordion'>
    <div className='containerPic'>
      hola
    </div>
    <div className='containerAccordion'>
        {AccordionItems.map((item, index) => (
          <div className="accordion accordion-flush" id="accordionflushExample" key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={item.id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={item.data} aria-expanded="false" aria-controls={item.id_aria}>
                  {item.title}
                </button>
              </h2>
              <div id={item.id_aria} className="accordion-collapse collapse" aria-labelledby={item.id} data-bs-parent="#accordionflushExample">
                <div className="accordion-body">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
    </>
  )
}

export default Accordion