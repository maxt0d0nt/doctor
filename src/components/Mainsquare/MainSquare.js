import React from 'react';
import './MainSquare.css';
import { AiFillDribbbleCircle, AiFillFileImage, AiFillEnvironment } from 'react-icons/ai';
import { IconContext } from "react-icons";

const MainSquare = () => {

  const Options = [
    {
      name: "Turno",
      pic: <AiFillDribbbleCircle />
    },

    {
      name: "Presentate",
      pic: <AiFillFileImage />
    },

    {
      name: "Resultados",
      pic: <AiFillEnvironment />
    },
  ]


  return (
    <>
      <div className="mainSquare">
        <div className='containerIcons'>
          {Options.map((item, index) => (
            <div className="squareIcon">
              <IconContext.Provider value={{ size: "5em" }}>
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