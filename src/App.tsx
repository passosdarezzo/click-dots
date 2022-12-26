import React, { useState, useEffect } from 'react';
import './App.css';
import Ponto, { IPonto } from './components/Ponto';

function App() {
  const [listaPontos, setListaPontos] = useState<IPonto[]>([]);
  const [refazer, setRefazer] = useState<IPonto[]>([]);
  const [corPonto, setCorPonto] = useState<string>("#2a33b2");
  const [corTela, setCorTela] = useState<string>("#ffffff");

  useEffect(() => {
    window.document.title = "Click-Dots";
  }, []);

  const geraPonto = (event: React.MouseEvent<HTMLElement>) => {
    const ponto = {
      x: event.clientX - 10,
      y: event.clientY - 10,
      cor: corPonto
    }

    setListaPontos(prev => [...prev, ponto]);

    // Limpa a lista de refazer
    if (refazer.length > 0) {
      setRefazer([]);
    }
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

    if (ponto !== undefined) {
      setListaPontos(prev => [...prev, ponto]);
    }
  }

  const defineCorTela = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setCorTela(event.target.value);
  }

  const defineCorPonto = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setCorPonto(event.target.value);
  }

  return (
    <div
      className="page"
      style={{
        background: `${corTela}`
      }}
      onClick={geraPonto}
    >
      <div className="toolbox">
        <div>
          <input
            id="tela"
            type="color"
            name="tela"
            value={corTela}
            onClick={(event) => event.stopPropagation()}
            onChange={defineCorTela}
          />
          <label htmlFor="tela">&nbsp;&nbsp;Tela</label>
        </div>

        <div>
          <input
            id="ponto"
            type="color"
            name="ponto"
            value={corPonto}
            onClick={(event) => event.stopPropagation()}
            onChange={defineCorPonto}
          />
          <label htmlFor="ponto">&nbsp;&nbsp;Ponto</label>
        </div>
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
      </div>
      {
        listaPontos.map((p, idx) => (
          <Ponto
            key={idx}
            x={p.x}
            y={p.y}
            cor={p.cor}
          />
        ))
      }
    </div>
  );
}

export default App
