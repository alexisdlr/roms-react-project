import { useState } from "react";
import GameList from "../../components/gamelist/GameList";
import useConsoles from "../../hooks/useConsoles";
import "./Games.scss";

function Games() {
  const [console, setConsole] = useState("");
  const {consoles} = useConsoles()
  return (
    <div className="games">
      <aside className="aside">
        <h2>Todas las <span>Consolas</span></h2>
        <div className="consoles-list">
          <button value={'all'} onClick={((e) => setConsole(e.target.value))}>Todos</button>
          {consoles.map((c, i) => (
            <button value={c._id} key={i} onClick={((e) => setConsole(e.target.value))}>{c.name}</button>
          ))}
        </div>
      </aside>

      <div className="container-games">
        <div className="search">
          <input type={"text"} placeholder={"Buscar juegos..."} />
        </div>
        <GameList consoleId={console} />
      </div>
    </div>
  );
}

export default Games;
