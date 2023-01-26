import "./home.scss";
import CircleIcon from "@mui/icons-material/Circle";

export default function Intro({ menuOpen }) {
  return (
    <div className="home" id="home">
      <div className="top">
        <div className={"wrapper " + (menuOpen && "active")}>
          <h1>Welcome to Air Express</h1>
          <hr className="hr"></hr>
          <div className="middle">
            <h3 className="bottomText">Trust With Ease</h3>
            <CircleIcon className="icon" />
            <h3 className="bottomText">Satisfaction Guaranteed</h3>
            <CircleIcon className="icon" />
            <h3 className="bottomText">Affordable Prices</h3>
          </div>
        </div>
      </div>
      <div className={"bottom " + (menuOpen && "active")}>
        <div className={"box3 " + (menuOpen && "active")}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Monument_Valley_10.jpg" alt="" />
          {/* <span>We provide services for residential and commercial properties.  In need of tune-ups, repairs, or replacement?  Look no further!  We are a well established business, servicing the east valley for over 15 years.  We are honest and do not mess around with selling you services or repairs you do not need.  Schedule a service call with us today!</span> */}
        </div>
      </div>
    </div>
  );
}
