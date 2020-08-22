import React from "react";
//import "./App.css";
import "./styles.css";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

function App() {
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

export default App;
