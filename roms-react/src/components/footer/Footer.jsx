import { AiFillHeart } from "react-icons/ai";
import "./Footer.scss";
import useConsoles from "../../hooks/useConsoles";
import { Link } from "react-router-dom";
const Footer = () => {
  const { consoles } = useConsoles();
  return (
    <footer className="footer">
      <span>© GameLoadX 2023</span>
      <span>
        <AiFillHeart style={{ color: "red" }} /> Hecho por gamers para gamers{" "}
        <AiFillHeart style={{ color: "red" }} />
      </span>
      <div className="consoles">
        {consoles.map((console) => (
          <button className="console-button">
            <Link to={"/juegos/" + console._id} style={{color: 'inherit', textDecoration: 'none'}}>
              {console.name} ROMs {">"}
            </Link>
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
