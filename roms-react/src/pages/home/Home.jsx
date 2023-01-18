import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Home.scss";
function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="Home">
      <div className="hero">
        <h1>ENCUENTRA LOS MEJORES JUEGOS</h1>
        <div className="container-desc">
          <p>
            Cientos de títulos en videojuegos y opciones para todos los gustos,
            sumérgete en el mundo gamer y forma parte de la experiencia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
