import React from "react";
import "./Accordion.css";
import accordionPic from "../../assets/img/accordionPic.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import AccordionItems from "../../models/Accordion";

const Accordion = () => {
  return (
    <>
      <div className="containerMainAccordion" id="about">
        <div className="containerPic">
          <img src={accordionPic} alt="imagen" />
        </div>
        <div className="containerAccordion">
          <h2>¿POR QUE ELEGIRNOS?</h2>
          {AccordionItems.map((item, index) => (
            <div
              className="accordion accordion-flush"
              id="accordionflushExample"
              key={index}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id={item.id}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={item.data}
                    aria-expanded="false"
                    aria-controls={item.id_aria}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={item.id_aria}
                  className="accordion-collapse collapse"
                  aria-labelledby={item.id}
                  data-bs-parent="#accordionflushExample"
                >
                  <div className="accordion-body">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="triangle"></section>
    </>
  );
};

export default Accordion;
