import React from 'react';
import './MainSquare.css';
import { AiTwotoneCalendar, AiOutlineUser, AiTwotoneEdit } from 'react-icons/ai';
import { IconContext } from "react-icons";

const MainSquare = () => {

  const Options = [
    {
      name: "AGENDAR TURNO",
      pic: <AiTwotoneCalendar />
    },

    {
      name: "CONSULTA",
      pic: <AiOutlineUser />
    },

    {
      name: "RESULTADOS",
      pic: <AiTwotoneEdit />
    },
  ]


  return (
    <>
      <div className="mainSquare">
        <div className='title'>
          <h2>TU CONSULTA EN 3 SIMPLES PASOS</h2>
        </div>
        <div className='containerIcons'>
          {Options.map((item, index) => (
            <div className="squareIcon"  key={index}>
              <IconContext.Provider value={{ size: "5em", color: "006064" }}>
                <div className='iconPic' >
                {item.pic}
                </div>
              </IconContext.Provider>
              <div className='iconName'>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MainSquare