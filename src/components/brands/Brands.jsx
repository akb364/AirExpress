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
                Here at Air Express Heating and cooling, we service any brand of
                AC unit. Additionally, we sell Trane, Daikin, and Goodman AC
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
                We service most areas in the East Valley. This includes San tan
                valley, Chandler, Scottsdale, Gilbert, mesa, and Queen creek.
              </h2>
            </div>
            <img className="map" src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
