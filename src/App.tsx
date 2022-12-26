import React, { useState } from 'react';
import './App.css';

interface KonvaTextEventTarget extends EventTarget {
  index: number
}

interface MouseEvent extends React.MouseEvent<HTMLElement> {
  target: KonvaTextEventTarget
}

function App() {
  const [count, setCount] = useState(0);

  const geraPonto = (event: React.MouseEvent<HTMLElement>) => {
    console.log(`X: ${event.clientX} - Y: ${event.clientY}`);
  }

  return (
    <div
      className="page"
      onClick={geraPonto}
    />
  );
}

export default App
