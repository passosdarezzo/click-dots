import React from "react";

export interface IPonto {
  x: number
  y: number
}

const Ponto = ({x, y}: IPonto) => {

  return (
    <span className="dot" style={{
      top: y + "px",
      left: x + "px"
    }}></span>
  );
}

export default Ponto;
