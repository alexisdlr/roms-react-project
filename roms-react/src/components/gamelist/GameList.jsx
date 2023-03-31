import { useCallback, useState } from "react";
import useGames from "../../hooks/useGames";
import Game from "../game/Game";
import "./GameList.scss";
function GameList({ slice, consoleId }) {
  const { games, searchParams, mutation} = useGames();
  const filter = searchParams.get("filter") ?? "";
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRows, setTotalRows] = useState(100);

  const cambiarPagina = useCallback((nuevaPagina) => {
    setPageNumber(nuevaPagina);
  }, [setPageNumber])

  const cambiarTamanoPagina = useCallback((nuevoTamanoPagina) => {
    setPageSize(nuevoTamanoPagina);
  }, [setPageSize])


  
  return (
    <>
      <div className="gamelist">
        {games && slice
          ? games
              .slice(0, 5)
              .map((game, index) => (
                <Game game={game} index={index} key={game.id} />
              ))
          : games
          ? games
              .filter((game) => {
                if (!filter) return true;

                return game.name.toLowerCase().includes(filter.toLowerCase());
              })
              .map((game, index) => (
                <Game game={game} index={index} key={game.id} />
              ))
          : "not found"}
      </div>
      <div className="pagination">
        <div>
          <span>
            Página {pageNumber} de {Math.ceil(totalRows / pageSize)}
          </span>
          {Array.from(
            { length: Math.ceil(totalRows / pageSize) },
            (_, i) => i + 1
          ).map((pagina) => (
            <button key={pagina} onClick={() => {
              cambiarPagina(pagina)
              mutation.mutate(pageNumber, pageSize)
              }}>
              {pagina}
            </button>
          ))}
        </div>
        <div>
          Tamaño de página:
          {[10, 20, 50].map((tamanoPagina) => (
            <button
              key={tamanoPagina}
              onClick={() => cambiarTamanoPagina(tamanoPagina)}
            >
              {tamanoPagina}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default GameList;
