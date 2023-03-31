import "./ContributorCard.scss";

const ContributorCard = ({ contributor }) => {
  return (
    <div className="contributor">
      <img src={contributor.img} alt={contributor.name} />
      <h3>{contributor.name}</h3>
    </div>
  );
};

export default ContributorCard;
