import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import defaultPic from "../../assets/userPicDefault.png";
import {
  AiFillFacebook,
  AiFillHeart,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import "./Profile.scss";
import UpdateProfile from "../../components/updateProfile/UpdateProfile";
import useGames from "../../hooks/useGames";
function Perfil() {
  const { auth } = useAuth();
  const { favoritos, handleQuitarFavorito} = useGames();

  const handleClick = (game) => {
    handleQuitarFavorito(game)
  }

  return (
    <motion.div animate={{ opacity: [0, 1] }} className="profile">
      <div className="images">
        <img
          src={
            "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="cover"
          className="cover"
        />
        <img
          src={
            auth.picture === undefined || auth.picture === null
              ? defaultPic
              : auth.picture
          }
          alt="default pic"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <AiFillFacebook />
            </a>
            <a href="https://instagram.com">
              <AiFillInstagram />
            </a>
            <a href="https://twitter.com">
              <AiFillTwitterCircle />
            </a>
            <a href="http://linkedin.com">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="center">
            <span> {auth.name}</span>
            <div className="info">
              <div className="item">
                <MdPlace />
                <span>{auth.city || "Nava, Coahuila"}</span>
              </div>
              <div className="item">
                <span>{auth.website || "alxsdlr.com"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        favoritos.length > 0 ? <div className="container-all">
        <h2>Juegos que te gustaron</h2>
        <div className="container-gamesLiked">
          {favoritos.map((game) => (
            <div key={game._id} className="gameLiked">
              <img src={game.img} />
              <h3>{game.name}</h3>
              <span onClick={() => handleClick(game)} className='dislike'>
                Ya no me gusta <AiFillHeart />
              </span>
            </div>
          ))}
        </div>
      </div> : <h2 style={{textAlign: 'center'}}>Añade juegos a tu seccion de Me gusta</h2>
      }
    </motion.div>
  );
}

export default Perfil;
