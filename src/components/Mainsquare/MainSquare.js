import React from 'react';
import './MainSquare.css'

const MainSquare = () => {

    const Options = [
         {
            name: "Turno",
            pic: "hola"
        },

         {
            name: "Presentate",
            pic: "hola"
        },

         {
            name: "Resultados",
            pic: "hola"
        },
        {
            name: "Resudos",
            pic: "hola"
        },


    ]


  return (
    <>
    <div>
       { Options.map((item, index) => (
        <div width="20px"  >{item.name}</div>
        ))}     
    </div>
    </>
  )
}

export default MainSquare