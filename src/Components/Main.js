import React from "react";
import "./main.css";
import illustration from "../Assets/Illustration.png";

function Main() {
  return (
    <div className="main">
      <div className="main__left">
        <button className="main__button">
          We are now allowing early-access for users. <span>Learn more.</span>
        </button>
        <h2>Build a highly engaged community with no effort.</h2>
        <p>
          Commune offerts the tools you need to build a highly engaged community
          with little to no effort. Simply setup your Commune workspace, and
          manage everything from members to content from one central dashboard.
        </p>
        <div className="main__join">
          <input type="email" placeholder="Enter your e-mail address" />
          <button className="main__button-join">Join Waitlist</button>
        </div>
      </div>
      <div className="main__right">
        <img src={illustration} alt="Violet phone handdrawn illustration" />
      </div>
    </div>
  );
}

export default Main;
