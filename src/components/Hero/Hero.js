import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="containerHero" id="home">
        <div className="mainName">
          Consultorios
          <br></br>
          Yolanda Delgado
        </div>
        <div className="mainPhrase">
          <h1>
            Por que tu Salud
            <br></br>
            es lo mas importante
          </h1>
        </div>
      <div className="mainLinks">
          <button className="btn" id="btn-up">
            Odontologia
          </button>
          <button className="btn" id="btn-dwn">
            Ecosonografia
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
