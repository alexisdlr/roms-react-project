import React from "react";
import { useGames } from "../../hooks/useGames";
import Game from "../game/Game";
import "./GameList.scss";
function GameList() {
const {games} = useGames()
  return (
    <div className="gamelist">
      {
        games ? games.map((game, index) => (
          <Game game={game} key={index} />
        )): 'not found'
      }
    </div>
  );
}

export default GameList;
