import "./services.scss";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BuildIcon from "@mui/icons-material/Build";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import TuneUps from "../../assets/tuneUp.png";
import Repairs from "../../assets/repairs.png";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: <BuildIcon className="serviceIcon" />,
      title: "Tune-ups",
      desc: "We will check air filters, condensor coils, evaporators, coolant levels, and more! ",
      img: TuneUps,
    },
    {
      id: "2",
      icon: <ConstructionIcon className="serviceIcon" />,
      title: "Repairs",
      desc: "Diagnosing and repairing of any fixable damaged components.",
      img: Repairs,
    },
    {
      id: "3",
      icon: <HomeRepairServiceIcon className="serviceIcon" />,
      title: "Replacement",
      desc: "Removing and replacing old components with new high quality parts.",
      img: "https://www.publicdomainpictures.net/pictures/10000/nahled/296-1240880976mhKH.jpg",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      console.log({currentSlide});
  };

  return (
    <div className="services" id="services">
      <div className="header">
        <h1>Our Services</h1>
      </div>
      <div className="middle">
        <h3 className="bottomText">Residential & Commercial</h3>
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <span>{d.icon}</span>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href="#contact">
                    <span className="quote">Get a free quote!</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosIcon
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIosIcon
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
