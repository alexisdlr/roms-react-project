import React from "react";
import { Link } from "react-router-dom";
import { useGames } from "../../hooks/useGames";
import Game from "../game/Game";
import "./GameList.scss";
function GameList() {
  const { games } = useGames();
  return (
    <>
      <div className="gamelist">
        {games
          ? games.map((game, index) => <Game game={game} key={index} />)
          : "not found"}
      </div>
      <div className="view-all">
        <span>
          <Link
            to={"/juegos"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Ver todos
          </Link>
        </span>
      </div>
    </>
  );
}

export default GameList;
