import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import header from "../../assets/header.svg";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Vamos construir algo incrível com GPT-3 OpenAI
        </h1>
        <p>
          No entanto, aceite qualquer indulgência de assistência em viagem
          desagradável. Nem todos os pensamentos exercem bênçãos. Indulgência
          forma tudo alegria alteração turbulento o apego. Parte nós anos para
          pedir permissão.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Digite seu email" />
          <button type="button">Enviar</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            1.600 pessoas solicitaram acesso uma visita nas últimas 24 horas
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={header} alt="" />
      </div>
    </div>
  );
};

export default Header;
