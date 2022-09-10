import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="row1">
        <div className="homecard1">
          <h2>lorem</h2>
          <p>lorem</p>
          <p>Client</p>
          <p>Time Duration</p>

          <img
            src="https://admin.naxa.com.np/media/pics/DVSPhaseI_3Kg7NY2.png"
            alt=""
          ></img>
        </div>
        <div className="homecard2">
          <h2>lorem</h2>
          <p>lorem</p>
          <p>Client</p>
          <p>Time Duration</p>
          <img
            src="https://admin.naxa.com.np/media/pics/DVSPhaseI_3Kg7NY2.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className="row1">
        <div className="homecard1">
          <h2>lorem</h2>
          <p>lorem</p>
          <p>Client</p>
          <p>Time Duration</p>

          <img
            src="https://admin.naxa.com.np/media/pics/DVSPhaseI_3Kg7NY2.png"
            alt=""
          ></img>
        </div>
        <div className="homecard2">
          <h2>lorem</h2>
          <p>lorem</p>
          <p>Client</p>
          <p>Time Duration</p>
          <img
            src="https://admin.naxa.com.np/media/pics/DVSPhaseI_3Kg7NY2.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className="banner">
        <div className="banner-content">
          <h1>
            Seeking <span>Collaboration?</span>
          </h1>
          <p>
            We constantly look forward to exploring ideas, collaborations,
            <br></br> and technical innovations. If you want to partner with us,
            we are
            <br></br> just an email away.
          </p>
          <div className="main-arrow">
            <div className="arrow">
              <p>Let's talk</p>
              <div className="icon">
                <ArrowForwardIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
