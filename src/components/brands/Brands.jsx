import "./brands.scss";
import Goodman from "../../assets/Goodman.png"
import Daikin from "../../assets/Daikin.png"
import Trane from "../../assets/Trane.png"

export default function Brands() {
    return(
        <div className="brands" id="brands">
            <div className="header">
            <h1>Brands We Service</h1>
            </div>
            <div className="wrapper">
            <div className="left">
                <img src={Goodman} alt="" />
                <img src={Daikin} alt="" />
                <img src={Trane} alt="" />
            </div>
            <div className="right">
                
            </div>

            </div>
        </div>
    )
}