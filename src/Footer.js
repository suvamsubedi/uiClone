import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <div className="footer-content">
      <div className="footer-img">
        <img
          src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"
          alt=""
        ></img>

        <h4>Naxa Pvt Ltd.</h4>
        <p>Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal</p>
        <p>14416543</p>
        <p>info@naxa.com.np</p>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div>
        <h4>Services</h4>
        <h4>Portfolio</h4>
      </div>
      <div className="footer-end">
        <h4>Company</h4>
        <p>About us</p>
        <p>Work with us</p>
        <h4>Contact</h4>
        <p>© Naxa 2020. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
