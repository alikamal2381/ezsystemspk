import React from "react";
import "./styles.css";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

function ComingSoon() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          EZ Systems Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default ComingSoon;
