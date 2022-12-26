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

  const desfazer = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const novaListaPontos = listaPontos.slice();
    novaListaPontos.pop();
    setListaPontos(novaListaPontos);
  }

  const limpar = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setListaPontos([]);
  }

  return (
    <div
      className="page"
      onClick={geraPonto}
    >
      <button
        onClick={desfazer}
      >
        Desfazer
      </button>
      <button
        onClick={limpar}
      >
        Limpar
      </button>

      {
        listaPontos.map((p, idx) => (
          <Ponto
            key={idx}
            x={p.x}
            y={p.y}
          />
        ))
      }
    </div>
  );
}

export default App
