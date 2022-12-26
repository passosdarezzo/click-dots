import React from "react";

export interface IPonto {
  x: number
  y: number
}

const Ponto = ({x, y}: IPonto) => {

  return (
    <span style={{
      position: "fixed",
      backgroundColor: "black",
      width: "20px",
      height: "20px",
      borderRadius: "20px",
      top: y + "px",
      left: x + "px"
    }}></span>
  );
}

export default Ponto;
