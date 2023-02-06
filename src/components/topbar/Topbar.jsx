import "./topbar.scss";
import { Home } from "@material-ui/icons";
import Logo from "../../assets/logo.png"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            <Home className="icon"></Home>
          </a>
          <img src={Logo} alt="" />
          
        </div>
          <div className="middle">
          <a href="#services">Services</a>
          <a href="#brands">Brands and Location</a>
          <a href="#reviews">Reviews</a>
          <a href="#aboutUs">About Us</a>
          <a href="#contact">Contact</a>
          </div>
        <div className="right">
          <div className="topBarButton">
            <a className="button1" href="#contact">
              Get a Free Estimate
            </a>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
