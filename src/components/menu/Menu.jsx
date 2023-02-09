import "./menu.scss";
import { PhoneEnabled, Mail } from "@material-ui/icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import FeedIcon from "@mui/icons-material/Feed";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <span className="AirExpress">Air Express Heating and Cooling</span>
      <hr className="hrTop"/>
      <ul>
        <div className="contact">
          <li>
            <PhoneEnabled className="icon" />
            <span>
              <a href="tel:4808889655">+1 480-888-9655</a>
            </span>
          </li>
          <li>
            <Mail className="icon" />
            <span>
              <a href="mailto:airexpress@email.com">airexpress@email.com</a>
            </span>
          </li>
        </div>
      </ul>
      <div className="socials">
        <a
          href="https://www.facebook.com/airexpressheatingandcooling"
          target="_blank"
          rel="noreferrer"
          className="logo"
        >
          <FacebookIcon className="icon1"></FacebookIcon>
        </a>
        <a
          href="https://www.yelp.com/biz/air-express-heating-and-cooling-queen-creek"
          target="_blank"
          rel="noreferrer"
          className="logo"
        >
          <FeedIcon className="icon1"></FeedIcon>
        </a>
      </div>
    </div>
  );
}
