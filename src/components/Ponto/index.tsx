import React from "react";

export interface IPonto {
  x: number
  y: number
}

const Ponto = (props: IPonto) => {

  return (
    <span style={{
      position: "fixed",
      backgroundColor: "black",
      width: "20px",
      height: "20px",
      borderRadius: "20px",
      top: props.y + "px",
      left: props.x + "px"
    }}></span>
  );
}

export default Ponto;
