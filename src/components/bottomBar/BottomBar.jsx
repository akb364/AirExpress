import "./bottomBar.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import FeedIcon from '@mui/icons-material/Feed';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"bottombar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <div className="itemContainer">
            <a
              className="logo1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.yelp.com/biz/air-express-heating-and-cooling-queen-creek"
            >
              <FeedIcon className="icon1"></FeedIcon>
            </a>
          </div>
          <div className="itemContainer">
            <a
              className="logo1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/airexpressheatingandcooling"
            >
              <FacebookIcon className="icon1"></FacebookIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
