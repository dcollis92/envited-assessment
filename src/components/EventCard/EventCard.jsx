import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`/event`} className="card">
      <div className="card-content">
        <div className="card-img-container">
          <img
            className="usr-img"
            src="./assets/landing-page-image.svg"
            alt="landing-page"
          />
        </div>
        <h2 className="card-title">
          My Awesome Event
        </h2>
      </div>
    </Link>
  );
};

export default EventCard;
