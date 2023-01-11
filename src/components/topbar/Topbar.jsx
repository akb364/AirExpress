import "./topbar.scss";
import { PhoneEnabled, Mail, Home } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <Home className="icon"></Home>
          </a>
          <div className="itemContainer">
            <PhoneEnabled className="icon" />
            <span>+1 480-888-9655</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a href="mailto:airexpress@email.com">airexpress@email.com</a>{" "}
            </span>
          </div>
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
