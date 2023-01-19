import React from "react";
import { Link } from "react-router-dom";
import "./Game.scss";
function Game({ game }) {
  return (
      <div className="game">
        <div className="cont-img">
          <img
            src={game.img}
            alt=""
          />
        </div>
        <div className="title">
          <h2>{game.name}</h2>
          <a href={game.link} target={'_blank'}>Download</a>
        </div>
      </div>
  );
}

export default Game;
