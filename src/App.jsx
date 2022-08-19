import { useState } from 'react';
import CardNews from './components/CardNews';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Noticias</h1>
      <div className="container">
        <CardNews
          url="/vite.svg"
          titulo="Titulo 1"
          text="Aqui tem uma descrição do card 1"
        />
        <CardNews
          url="/vite.svg"
          titulo="Titulo 2"
          text="Aqui tem uma descrição do card 2 "
        />
        <CardNews
          url="/vite.svg"
          titulo="Titulo 3"
          text="Aqui tem uma descrição do card 3"
        />
        <CardNews
          url="/vite.svg"
          titulo="Titulo 4"
          text="Aqui tem uma descrição do card 4"
        />
      </div>
    </div>
  );
}

export default App;
