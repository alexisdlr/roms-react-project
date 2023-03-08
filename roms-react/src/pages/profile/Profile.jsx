import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import defaultPic from "../../assets/userPicDefault.png";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import {MdPlace} from 'react-icons/md'
import "./Profile.scss";
import UpdateProfile from "../../components/updateProfile/UpdateProfile";
function Perfil() {
  const { auth } = useAuth();
  console.log(auth.sub !== null)
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.3 ,ease: 'easeIn'}}
    className="profile">
      <div className="images">
        <img
          src={
            "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="cover"
          className="cover"
        />
        <img src={
            auth.picture === undefined || auth.picture === null
                ? defaultPic
                : auth.picture} alt="default pic" className="profilePic" />
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
              <AiFillTwitterCircle  />
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
                <span>{auth.city || 'Nava, Coahuila'}</span>
              </div>
              <div className="item">
                <span>{auth.website || 'alxsdlr.com'}</span>
              </div>
            </div>
        
          </div>
    
        </div>
      </div>
      {
        auth.sub !== null && (
            <UpdateProfile/>
        )
      }
    </motion.div>
  );
}

export default Perfil;
