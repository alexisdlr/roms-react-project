import { Link } from "react-router-dom";
import useGames from "../../hooks/useGames";
import Game from "../game/Game";
import "./GameList.scss";
function GameList({ slice, consoleId }) {
  const { games } = useGames();

  let gamesFilter;
  if(consoleId) {
    gamesFilter = games.filter(game => game.console === consoleId )
  }

  if(consoleId === 'all') {
    gamesFilter = games
  }

  return (
    <>
      <div className="gamelist">
        {
          gamesFilter ? gamesFilter.map((game, index) => (<Game game={game} index={index} key={game._id} />)) : games && slice
          ? games
              .slice(0, 5)
              .map((game, index) => (
                <Game game={game} index={index} key={game._id} />
              ))
          : games
          ? games.map((game, index) => (
              <Game game={game} index={index} key={game._id} />
            ))
          : "not found"
        }
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
