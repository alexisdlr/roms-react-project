import { motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import useGames from "../../hooks/useGames";
import "./Game.scss";

function Game({ game, index }) {
  const { handleAgregarFavorito } = useGames();
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 0.3,
      },
    }),
  };
  const handleClick = () => {
    handleAgregarFavorito(game)
    toast.success('Añadido a tus favoritos')
  }
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      custom={{ delay: (index + 1) * 0.1 }}
      variants={variants}
      viewport={{ once: true }}
      className="game"
    >
      <div className="cont-img">
        <img src={game.img} alt="" />
      </div>
      <div className="title">
        <h3>{game.name}</h3>
      </div>
      <div className="like">
        <a href={game.link} target={"_blank"}>
          Descargar Ahora
        </a>
        <span onClick={handleClick}>
          <AiOutlineHeart />
        </span>
      </div>
    </motion.div>
  );
}

export default Game;
