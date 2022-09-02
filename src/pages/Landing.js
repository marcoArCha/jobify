import React from "react";
import mainImage from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom"
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Hello there! This a project to learn MERN Stack. It's a cool app to
            keep track of your jobs aplications! Good luck during job hunting
            and happy coding!
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={mainImage} alt="job image" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
