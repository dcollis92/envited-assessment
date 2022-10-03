import "./Landing.scss";
import "./assets/Landing-page-image.svg";
import { GiPartyPopper } from "react-icons/gi";


function Landing() {
  return (
    <>
      <div>Imagine if Snapchat had events.</div>
      <div>
        Easily host and share events with your friends across any social media.
      </div>
      <div>
        <img src="./assets/Landing-page-image.svg" alt="Landing page" />
      </div>
      <div>
        <button><GiPartyPopper/>Create my event</button>
      </div>
    </>
  );
}

export default Landing;
