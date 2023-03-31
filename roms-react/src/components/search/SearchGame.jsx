import { AiOutlineSearch } from "react-icons/ai";
import useGames from "../../hooks/useGames";
import "./SearchGame.scss";
const SearchGame = () => {
  const { setSearchParams } = useGames();

  function handleSearch(e) {
    setSearchParams({ filter: e.target.value });
  }

  return (
    <div className="search-game">
      <label htmlFor="search">
        <input
        id="seach"
          type={"text"}
          onChange={handleSearch}
          placeholder={"Buscar juegos..."}
        />
        <span>
          <AiOutlineSearch size={22} />
        </span>
       
      </label>
    </div>
  );
};

export default SearchGame;
