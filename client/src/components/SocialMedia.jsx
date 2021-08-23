import React from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => (
  <div className="footer">
    <p>Post your Achievements!</p>
    <div className="icons">
      <a rel="noreferrer" href="https://www.facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a rel="noreferrer" href="https://www.twitter.com" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a rel="noreferrer" href="https://www.instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
);

export default SocialMedia;
