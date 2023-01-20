import "./services.scss";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BuildIcon from '@mui/icons-material/Build';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: <BuildIcon className="serviceIcon"/>,
      title: "Tune-ups",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://media.istockphoto.com/id/1152020644/photo/close-up-of-air-conditioning-repair-repairman-on-the-floor-fixing-air-conditioning-system.jpg?s=612x612&w=0&k=20&c=bibXOKFBEqIWNLDq_ht4oRoxDqMj0yLGoEzpTQUNey0=",
    },
    {
      id: "2",
      icon: <ConstructionIcon className="serviceIcon"/>,
      title: "Repairs",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/006/714/862/small/air-conditioning-repair-man-hands-checking-and-fixing-modern-air-conditioning-system-technician-team-checking-leakage-air-conditioning-system-photo.jpg",
    },
    {
      id: "3",
      icon: <HomeRepairServiceIcon className="serviceIcon"/>,
      title: "Replacement",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://www.publicdomainpictures.net/pictures/10000/nahled/296-1240880976mhKH.jpg",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="services" id="services">
      <h1>Our Services</h1>
      <hr />
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
                    <span>
                      {d.icon}
                    </span>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
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
