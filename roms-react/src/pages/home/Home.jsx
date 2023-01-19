import React from "react";
import { motion } from "framer-motion";
import "./Home.scss";
import GameList from "../../components/gamelist/GameList";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, type: "tween" }}
      className="Home"
    >
      <div className="hero">
        <h1>ENCUENTRA LOS MEJORES JUEGOS</h1>
        <div className="container-desc">
          <p>
            Cientos de títulos en videojuegos y opciones para todos los gustos,
            sumérgete en el mundo gamer y forma parte de la experiencia.
          </p>
        </div>
      </div>
      <div>

      </div>
      <GameList />
    </motion.div>
  );
}

export default Home;
