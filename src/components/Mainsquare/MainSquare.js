import React from "react";
import "./MainSquare.css";
import { IconContext } from "react-icons";
import Options from "../../models/Options";

const MainSquare = () => {
  return (
    <>
      <div className="mainSquare">
        <div className="title">
          <h2>TU CONSULTA EN 3 SIMPLES PASOS</h2>
        </div>
        <div className="containerIcons">
          {Options.map((item, index) => (
            <div className="squareIcon" key={index}>
              <IconContext.Provider value={{ size: "5em", color: "006064" }}>
                <div className="iconPic">{item.pic}</div>
              </IconContext.Provider>
              <div className="iconName">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSquare;
