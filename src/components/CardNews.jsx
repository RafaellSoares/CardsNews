import React from 'react';

export default function CardNews(props) {
  return (
    <div>
      <div className="card">
        <div className="foto">
          <img src={props.url} alt="" />
        </div>
        <div className="conteudo">
          <h2>{props.titulo}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
