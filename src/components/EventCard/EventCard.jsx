import { Link } from "react-router-dom";
import "./EventCard.scss";

const EventCard = () => {
  return (
    <Link to={"/event"} className="card">
      <div className="card-content">
        <div className="card-img-container">
          <img
            className="usr-img"
            src="./assets/landing-page-image.svg"
            alt="landing-page"
          />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
