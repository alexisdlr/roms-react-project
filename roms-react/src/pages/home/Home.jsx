import { motion } from "framer-motion";
import { BiGame } from "react-icons/bi";
import GameList from "../../components/gamelist/GameList";
import "./Home.scss";

function Home() {
  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.3, ease: 'easeInOut'}}
        className="Home"
      >
        <div className="hero">
          <h1
          >
            GameLoad
            <BiGame />
          </h1>
          <p>
            Cientos de títulos en videojuegos y opciones para todos los gustos,
            sumérgete en el mundo gamer y forma parte de la experiencia.
          </p>
        </div>
      </motion.div>

      <div className="gamelist-container">
        <h2>Juegos que podrian interesarte: </h2>
        
      </div>

      <div className="what-is">
        <h2>¿Qué son los Free ROMS?</h2>
        <p>
          Si eres fanático de los videojuegos, sabrás que los juegos Free Roms
          son un género popular. Los juegos Rom son un tipo de videojuego que
          normalmente se juega en teléfonos móviles y otros dispositivos
          portátiles. A veces también se los conoce como "juegos de emuladores"
          porque permiten a los jugadores jugar videojuegos más antiguos que no
          se lanzaron en plataformas modernas o que no se lanzaron en el estilo
          en que se juegan en los emuladores.
        </p>
        <p>
          Los juegos Rom también se definen como juegos de consola o computadora
          que se basan en la idea de explorar y conquistar un mundo virtual.
          Suelen tener una temática nostálgica y ofrecen una experiencia única
          que no se encuentra en otros tipos de videojuegos. En esta
          publicación, exploraremos la historia de los juegos Rom y le daremos
          una lista de los mejores juegos Rom para PC y consolas.
        </p>
      </div>
    </>
  );
}

export default Home;
