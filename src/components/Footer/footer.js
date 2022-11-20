import React from "react";
import { SocialsMinimal } from "../social/socials";
import './footerStyle.scss'
const Footer = () => {
  return (
   <div className="foot-container">
    <div className="flexFoot">
      <div className="textArea">
        <h1>Have an idea?</h1><h3>Send Me a Message</h3>
      </div>
        <SocialsMinimal />
    </div>
   </div>
  );
};
export default Footer;