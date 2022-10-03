import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.scss";

// Services
import { getOne } from "../../services/events";

// Components
import EventActions from "./components/EventActions";
import EventCard from "../../components/EventCard/EventCard";

const EventDetails = ({ user }) => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id);
      setEvent(data.event);
    };
    fetchOne();
  }, [id]);

  return (
    event && (
      <>
        <section className="event-details-container">
          <div className="event-img">
            <EventCard event={event} />
          </div>
          <div className="event-details">
            <h1>{event.title}</h1>
            <h2>Hosted By: {event.host} </h2>
            <h3>Date: {event.date}</h3>
            <h3>Location: {event.location}</h3>
            <h3>Link: {event.link}</h3>
            <p>Description: {event.description}</p>
            <p>Comments: {event.comments}</p>
            {event.is_attending === "yes" ? (
              <p>Attending: Yes</p>
            ) : (
              <p>Attending: No</p>
            )}
            <EventActions event={event} user={user} />
          </div>
        </section>
      </>
    )
  );
};

export default EventDetails;
