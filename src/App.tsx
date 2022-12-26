import React, { useState, useEffect } from 'react';
import './App.css';
import Ponto, { IPonto } from './components/Ponto';


function App() {
  const [listaPontos, setListaPontos] = useState<IPonto[]>([]);
  const [refazer, setRefazer] = useState<IPonto[]>([]);

  useEffect(() => {
    window.document.title = "Click-Dots";
  }, []);

  const geraPonto = (event: React.MouseEvent<HTMLElement>) => {
    console.log(`X: ${event.clientX} - Y: ${event.clientY}`);

    const ponto = {
      x: event.clientX - 10,
      y: event.clientY - 10
    }

    setListaPontos(prev => [...prev, ponto]);
  }

  const desfazer = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const novaListaPontos = listaPontos.slice();
    const ponto = novaListaPontos.pop();
    setListaPontos(novaListaPontos);

    if (ponto !== undefined) {
      const novaListaRefazer = refazer.slice();
      novaListaRefazer.push(ponto);
      setRefazer(novaListaRefazer);
    }
  }

  const limpar = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setListaPontos([]);
  }

  const onRefazer = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const ponto = refazer.pop();

    if(ponto !== undefined) {
      setListaPontos(prev => [...prev, ponto]);
    }
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
        onClick={onRefazer}
      >
        Refazer
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
