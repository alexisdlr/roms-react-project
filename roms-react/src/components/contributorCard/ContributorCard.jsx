import "./ContributorCard.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
const ContributorCard = ({ contributor }) => {
  return (
    <div className="contributor">
      <img src={contributor.img} alt={contributor.name} />
      <h3>{contributor.name}</h3>
      <span>{contributor.position}</span>
      <div className="networks">
        <span>
          <a href="https://facebook.com" target="_blank">
            <AiFillFacebook size={30} />
          </a>
        </span>
        <span>
          <a href="https://instagram.com" target="_blank">
            <AiFillGithub size={30} />
          </a>
        </span>
        <span>
          <a href="http://github.com" target="_blank">
            <AiFillLinkedin size={30} />
          </a>
        </span>
        <span>
          <a href="http://linkedin.com" target="_blank">
            <AiFillInstagram size={30} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContributorCard;
