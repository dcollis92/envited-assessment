import "./Landing.scss";
// import "./assets/Landing-page-image.svg";
import { GiPartyPopper } from "react-icons/gi";
import EventCard from "../../components/EventCard/EventCard";
function Landing() {
  return (
    <>
      <div className="landing-header">
        <h1>Imagine if</h1>
        <div className="gradient-text">Snapchat </div>
        <h1>had events.</h1>
      </div>
      <div className="app-description">
        <p>
          Easily host and share events with your friends across any social media.
        </p>
      </div>
      <div className="event-card">
        <EventCard />
      </div>
      <div>
        <button className="button">
          <GiPartyPopper /> Create my event
        </button>
      </div>
    </>
  );
}

export default Landing;
