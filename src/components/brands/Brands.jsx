import "./brands.scss";
import truck from "../../assets/truck.png";
import map from "../../assets/EastValley.jpeg";

export default function Brands() {
  return (
    <div className="brands" id="brands">
      <div className="wrapper">
        <div className="left">
          <div className="container">
            <div className="header">
              <h1>Brands We Service</h1>
            </div>
            <img src={truck} alt="" />

            <div className="text">
              <h2>
                Here at Air Express Heating and cooling, we service any AC unit
                brand. Additionally, we sell Trane, Daikin, and Goodman AC
                units. All of our technicians are fully certified and will
                provide the best HVAC service possible.
              </h2>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="container">
            <div className="header">
              <h1>Service Area</h1>
            </div>
            <div className="text">
              <h2>
                Air Express services the Phoenix Metropolitan Area, this
                includes San Tan Valley, Chandler, Scottsdale, Gilbert, Mesa,
                and Queen creek! Give us a call now at +1 480-888-9655 or send us a message via our
                <a  href="#contact"> contact page</a>.
              </h2>
            </div>
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
