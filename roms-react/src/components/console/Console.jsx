import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Console.scss";
function Console({ console, index }) {
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
  return (
    <Link
      to={"/juegos/" + console.id}
      replace={true}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        custom={{ delay: (index + 1) * 0.1 }}
        variants={variants}
        viewport={{once: true}}
        className="console"
      >
        <img src={console.img} alt={console.name} />
        <h2>{console.name}</h2>
      </motion.div>
    </Link>
  );
}

export default Console;
