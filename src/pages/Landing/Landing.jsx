import "./Landing.scss";
// import "./assets/Landing-page-image.svg";
import { GiPartyPopper } from "react-icons/gi";
import EventCard from "../../components/EventCard/EventCard";
function Landing() {
  return (
    <div className="landing-page">
      <div className="heading-text">
        <div className="heading">
          <div className="tagline">
            Imagine if
            <br />
            <div className="snapchat">Snapchat </div>
            <br />
            had events.
          </div>
        </div>
        <div className="app-description">
          <p>
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
      </div>
      <div className="event-card">
        <EventCard />
      </div>
      <div>
        <button className="button">
          <div className="button-text">
            <GiPartyPopper /> Create my event
          </div>
        </button>
      </div>
    </div>
  );
}

export default Landing;
