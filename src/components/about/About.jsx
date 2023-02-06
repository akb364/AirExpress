import "./about.scss";
import ACUnit from "../../assets/ACUnits.jpeg";

export default function Portfolio() {
  return (
    <div className="aboutUs" id="aboutUs">
      <h1>About The Owner</h1>
      <div className="wrapper">
        <div className="left">
          <img src={ACUnit} alt="" />
        </div>
        <div className="right">
          <div className="text">
            <h2>
              My name is Trint Lytle. I am the owner of Air Express. I have been
              in the HVAC business for almost 20 years. I take pride in my work
              and in the company I have built. I believe that honesty truly is
              the best policy. My techs are not paid on commission, so they will
              only recommend what is needed. We are licensed and bonded, and
              I guarantee my work 100%.
            </h2>
          </div>
          <div className="signature">
            <h2>-Trint Lytle</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
