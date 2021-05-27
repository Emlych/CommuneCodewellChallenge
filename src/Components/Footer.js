import React from "react";
import "./footer.css";
import atlassian from "../Assets/Atlassian Icon.svg";
import behance from "../Assets/Behance Icon.svg";
import bing from "../Assets/Bing Icon.svg";
import bitbucket from "../Assets/Bitbucket Icon.svg";
import dropbox from "../Assets/Dropbox Icon.svg";
import twitch from "../Assets/Twitch Icon.svg";
import twitter from "../Assets/Twitter Icon.svg";

function Footer() {
  return (
    <div className="footer">
      <p>Used by these companies:</p>
      <div className="footer__logos">
        <img src={atlassian} alt="atlassian logo" />
        <img src={behance} alt="behance logo" />
        <img src={bing} alt="bing logo" />
        <img src={bitbucket} alt="bitbucket logo" />
        <img src={dropbox} alt="dropbox logo" />
        <img src={twitch} alt="twitch logo" />
        <img src={twitter} alt="twitter logo" />
      </div>
    </div>
  );
}

export default Footer;
