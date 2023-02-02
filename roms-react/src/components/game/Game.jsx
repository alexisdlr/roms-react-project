import { motion } from "framer-motion";
import "./Game.scss";
function Game({ game, index }) {
  const variants = {
    hidden: {
      opacity: 0
    },
    visible: ({delay}) => ({
      opacity: 1,
      transition: {
        delay,
        duration: .3
      }
    })
  }
  return (
      <motion.div
      initial={'hidden'}
      animate={'visible'}
      custom={{delay: (index + 1) * 0.1}}
      variants={variants}
      className="game">
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
      </motion.div>
  );
}

export default Game;
