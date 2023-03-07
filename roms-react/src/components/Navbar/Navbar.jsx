import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
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
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
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
          <span>{auth.name}</span>
        </div>
        <div className="menu">
          <HiMenuAlt4 onClick={handleClick} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <HiX onClick={handleClick} />
              <ul>
                {["Juegos", "Consolas", "Acerca de", "Perfil"].map(
                  (item, i) => (
                    <li key={i}>
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
        </div>

        <div className="logout">
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
