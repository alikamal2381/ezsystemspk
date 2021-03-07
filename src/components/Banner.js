import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [state] = React.useState({
    title: "Grow your business with EZ Systems",
    text: "We are the team of talented developer making websites",
    image: "/images/grow-business.svg",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <NavLink
                    to="ez-akportfolio.surge.sh/"
                    className="btn btn-outline"
                    target="_blank"
                  >
                    My Portfolio
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;
                  <NavLink to="#" className="btn btn-smart">
                    <FaPlay className="play" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="main" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
