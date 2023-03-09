import { AiFillHeart } from "react-icons/ai";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <span>© GameLoadX 2023</span>
      <span><AiFillHeart style={{color: 'red'}} /> Hecho por gamers para gamers <AiFillHeart style={{color: 'red'}} /></span>
    </footer>
  );
};

export default Footer;
