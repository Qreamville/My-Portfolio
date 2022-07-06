import React from "react";
import Particle from "../particles/Particle";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Particle />
      <div className="hero-main w-full container mx-auto">
        <nav className="hero-navbar flex justify-between items-center w-full pt-4">
          <h1 className="hero-navbar__brand text-5xl font-bold">
            Qream<span className="text-tomato">ville</span>
          </h1>
          <div className="hero-navbar__resume text-2xl">
            <a
              href="#resume"
              className="text-tomato border-tomato hover:bg-tomato border"
            >
              Resume
            </a>
          </div>
        </nav>
        <div className="hero-profile">
          <div className="hero-profile__image"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
