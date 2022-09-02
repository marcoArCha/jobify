import React from "react";
import logo from "../assets/images/logo.svg";
import mainImage from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify logo" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={mainImage} alt="job" className="img main-img" />
      </div>
    </Wrapper>
  );
};



export default Landing;
