import React from "react";
import { useLocation } from "react-router-dom";
import Game from "../../components/game/Game";
import { motion } from "framer-motion";
import { useGames } from "../../hooks/useGames";
import "./SingleConsoleGames.scss";
function SingleConsoleGames() {
  const consoleId = useLocation().pathname.split("/")[2];
  const { games } = useGames(consoleId);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, type: "tween" }}
      className="container-all"
    >
      <div>
        <h1>Juegos</h1>
      </div>

      <div className="singleConsoleGames">
        {games.map((game, index) => (
          <Game key={index} index={index} game={game} />
        ))}
      </div>
    </motion.div>
  );
}

export default SingleConsoleGames;
