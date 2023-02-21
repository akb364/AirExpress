import "./home.scss";
import CircleIcon from "@mui/icons-material/Circle";

export default function Intro({ menuOpen }) {
  return (
    <div className="home" id="home">
      <div className="top">
        <div className={"wrapper " + (menuOpen && "active")}>
          <h1>Air Express Heating and Cooling</h1>
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
        <span>Commercial and Residential HVAC Services</span>
      </div>
    </div>
  );
}
