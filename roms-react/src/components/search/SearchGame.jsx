import useGames from "../../hooks/useGames";
import "./SearchGame.scss";
const SearchGame = () => {
  const { setSearchParams } = useGames();

  function handleSearch(e) {
    setSearchParams({ filter: e.target.value });
  }

  return (
    <div className="search-game">
      <input
        type={"text"}
        onChange={handleSearch}
        placeholder={"Buscar juegos..."}
      />
    </div>
  );
};

export default SearchGame;
