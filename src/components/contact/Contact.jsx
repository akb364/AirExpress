import "./contact.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import logo from "../../assets/logo.png";
import BottomBar from "../bottomBar/BottomBar";

export default function Contact() {
  const [messageOn, setMessageOn] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eb260kp",
        "template_42dhsw4",
        form.current,
        "Kii4Ta6FGln6vhq_e"
      )
      .then(
        (result) => {
          swal({
            title: "Success!",
            text: "Thanks, We have recieved your message and will contact you as soon as possible.",
            button: "Continue",
          });
          e.target.reset();
        },
        (error) => {
          swal({
            title: "Uh oh!",
            text: "Something went wrong, but you can still email us by clicking the email in the menu or by calling +1 480-888-9655.",
            icon: "error",
            button: "OK",
          });
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <h2>Schedule an appointment</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Email" name="user_email" />
          <input
            type="text"
            pattern="\d*"
            placeholder="Phone Number"
            name="user_organization"
          />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {messageOn && (
            <span>
              Thanks, We have recieved your message and will contact you as soon
              as possible.
            </span>
          )}
        </form>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}
