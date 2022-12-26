import React, { useState, useEffect } from 'react';
import './App.css';
import Ponto, { IPonto } from './components/Ponto';


function App() {
  const [count, setCount] = useState(0);
  const [listaPontos, setListaPontos] = useState<IPonto[]>([]);

  useEffect(() => {
    window.document.title = "Click-Dots";
  }, []);

  const geraPonto = (event: React.MouseEvent<HTMLElement>) => {
    console.log(`X: ${event.clientX} - Y: ${event.clientY}`);

    const novaListaPontos = listaPontos.slice();
    novaListaPontos.push({
      x: event.clientX,
      y: event.clientY
    });
    setListaPontos(novaListaPontos);
  }

  return (
    <div
      className="page"
      onClick={geraPonto}
    >
      
      {
        listaPontos.map(p => (
          <Ponto
            x={p.x}
            y={p.y}
          />
        ))
      }
    </div>
  );
}

export default App
