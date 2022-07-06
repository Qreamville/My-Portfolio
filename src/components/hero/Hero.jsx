import React from "react";
import Particle from "../particles/Particle";
import Profile from "../../assets/images/profile.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Particle />
      <div className="hero-main w-full container mx-auto h-4/5">
        <nav className="hero-navbar flex justify-between items-center w-full pt-4">
          <h1 className="hero-navbar__brand text-6xl font-bold">
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
        <div className="hero-profile h-full">
          <div className="hero-profile__image w-72">
            <img
              src={Profile}
              alt="Balikis"
              className="w-full h-auto overflow-hidden"
            />
          </div>
          <h2 className="hero-profile__name text-6xl text-tomato mb-2">
            Balikis Oyeleye
          </h2>
          <p className="text-2xl">I'm a Front-End Developer</p>
          <div></div>
          <button>
            <a href="#projects">See My Works</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
