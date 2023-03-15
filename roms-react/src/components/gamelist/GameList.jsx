import useGames from "../../hooks/useGames";
import Game from "../game/Game";
import "./GameList.scss";
function GameList({ slice, consoleId }) {
  const { games, searchParams } = useGames();
  const filter = searchParams.get("filter") ?? "";

  let gamesFilter;
  if (consoleId) {
    gamesFilter = games.filter((game) => game.console === consoleId);
  }

  if (consoleId === "all") {
    gamesFilter = games;
  }

  return (
    <div className="gamelist">
      {gamesFilter
        ? gamesFilter.map((game, index) => (
            <Game game={game} index={index} key={game._id} />
          ))
        : games && slice
        ? games
            .slice(0, 5)
            .map((game, index) => (
              <Game game={game} index={index} key={game._id} />
            ))
        : games
        ? games
            .filter((game) => {
              if (!filter) return true;

              return (
                game.name.toLowerCase().includes(filter.toLowerCase())
              );
            })
            .map((game, index) => (
              <Game game={game} index={index} key={game._id} />
            ))
        : "not found"}
    </div>
  );
}

export default GameList;
