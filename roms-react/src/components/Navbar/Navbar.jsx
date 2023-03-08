import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import defaultPic from "../../assets/userPicDefault.png";
import useAuth from "../../hooks/useAuth";
import "./Navbar.scss";
function Navbar() {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setToggle(!toggle);
    navigate("/login");
  };

  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [-50, 0] }}
      transition={{ duration: 0.3 }}
      className="Navbar"
    >
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>GameLoad X</span>
        </Link>
      </div>
      <div className="right">
        <div className="navigation">
          <nav>
            <ul>
              {["Juegos", "Consolas", "Acerca de", "Perfil"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={item.toLowerCase()}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <span>{item}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
        <div className="user">
          <img
            src={
              auth.picture === undefined || auth.picture === null
                ? defaultPic
                : auth.picture
            }
            alt="user"
          />
          <span>
            <Link
              to={"perfil"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {auth.name}
            </Link>
          </span>
        </div>
        <div className="menu">
          <HiMenuAlt4 onClick={handleClick} />
          <AnimatePresence>
            {toggle && (
              <motion.div
                animate={{ x: [300, 0] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                exit={{ x: 300 }}
              >
                <HiX onClick={handleClick} />
                <ul>
                  {["Juegos", "Consolas", "Acerca de", "Perfil"].map(
                    (item, i) => (
                      <li key={i} onClick={handleClick}>
                        <Link className="link" to={`${item}`}>
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                  <span className="logout-menu">
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                  </span>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="logout">
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
