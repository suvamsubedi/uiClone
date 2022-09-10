import React from "react";
import { useDispatch } from "react-redux";
import { productList } from "./redux/productAction.js";
import { useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  return (
    <div>
      <div className="header1">
        We have been working on several voluntary initiatives during the
        COVID-19 pandemic. Check them out
      </div>
      <div className="header2-full">
        <div className="header2">
          <img
            src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"
            alt=""
          ></img>
          <div>
            <ul>
              <li>Services</li>

              <div className="menu_items">
                <li>Portfolio</li>
                <ArrowDropDownIcon />

                <div className="whole_service">
                  <div className="main_service">
                    <div className="service_content">
                      <h4>General</h4>
                    </div>
                  </div>
                  <div className="main_service">
                    <div className="service_content">
                      <h4>International</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu_items">
                <li>Company</li>
                <ArrowDropDownIcon />

                <div className="whole_service">
                  <div className="main_service">
                    <div className="service_content">
                      <h4>About Us</h4>
                    </div>
                  </div>
                  <div className="main_service">
                    <div className="service_content">
                      <h4>Team</h4>
                    </div>
                  </div>
                  <div className="main_service">
                    <div className="service_content">
                      <h4>Work with US</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu_items">
                <li>Event & media</li>
                <ArrowDropDownIcon />

                <div className="whole_service">
                  <div className="main_service">
                    <div className="service_content">
                      <h4>Event</h4>
                    </div>
                  </div>
                  <div className="main_service">
                    <div className="service_content">
                      <h4>media</h4>
                    </div>
                  </div>
                  <div className="main_service">
                    <div className="service_content">
                      <h4>application</h4>
                    </div>
                  </div>
                </div>
              </div>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="arrow">
            <p>Let's talk</p>
            <div className="icon">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
        <h3>PORTFOLIO</h3>
        <h1>
          <span>Diverse, </span>
          <span className="blue-text">Impactful, </span> <br></br>
          <span>and Reliable</span>
        </h1>
      </div>
      <button onClick={() => dispatch(productList())}>Call Api Saga</button>
    </div>
  );
}

export default Header;
