import { Link } from "react-router-dom";

const EventCard = ({ event, eventImages }) => {
  return (
    <Link to={`/event/${event.id}`} className="card">
      <div className="card-content">
        <div className="card-img-container">
          <img
            className="usr-img"
            src="./assets/landing-page-image.svg"
            alt={`${event.make} ${event.model}`}
          />
        </div>
        <h2 className="card-title">
          {event.title} - {event.date}
        </h2>
      </div>
    </Link>
  );
};

export default EventCard;
