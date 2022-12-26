import React from "react";

export interface IPonto {
  x: number
  y: number
  cor?: string
}

const Ponto = ({ x, y, cor }: IPonto) => {
  return (
    <span
      className="dot"
      style={{
        top: y + "px",
        left: x + "px",
        backgroundColor: cor
      }}
    />
  );
}

export default Ponto;
