import React from "react";
import { Link } from "react-router-dom";
import "./Console.scss";
function Console({ console }) {
  return (
    <Link to={'/juegos/'+ console.id} replace={true} style={{textDecoration: 'none', color:'inherit'}}>
      <div className="console">
        <img src={console.img} alt={console.name} />
        <h2>{console.name}</h2>
      </div>
    </Link>
  );
}

export default Console;
