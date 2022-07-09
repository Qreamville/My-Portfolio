import React from "react";
import Particle from "../particles/Particle";
import Profile from "../../assets/images/profile.png";
import Pdf from "../../assets/Resume.pdf";
import "./hero.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaArrowDown,
  FaDownload,
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Hero = () => {
  // Array of Navigation
  const links = [
    { href: "https://github.com/Qreamville", icon: <FaGithub /> },
    { href: "https://twitter.com/Balqees_Oyeleye", icon: <FaTwitter /> },
    {
      href: "https://www.linkedin.com/in/balikis-oyeleye-3624a6191/",
      icon: <FaLinkedin />,
    },
    { href: "https://www.codewars.com/users/Qreamville", icon: <SiCodewars /> },
  ];

  const navLinks = links.map((link, _idx) => {
    return (
      <li className="my-3 hover:text-tomato" key={_idx}>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          {link.icon}
        </a>
      </li>
    );
  });

  return (
    <header id="top" className="hero">
      <nav className="hero-navbar w-full pt-4">
        <div className=" flex justify-between items-center container mx-auto">
          <h1 className="hero-navbar__brand text-6xl font-bold">
            Qream<span className="text-tomato">ville</span>
          </h1>
          <div className="hero-navbar__resume text-2xl">
            <a
              href={Pdf}
              className="text-tomato font-semibold border-tomato hover:bg-tomato border flex items-center justify-center gap-2"
              download
            >
              <span>Resume</span>
              <FaDownload />
            </a>
          </div>
        </div>
      </nav>
      <Particle />
      <div className="hero-main w-full container mx-auto h-full">
        <div className="hero-profile h-full">
          <div className="hero-profile__image w-72">
            <img
              src={Profile}
              alt="Balikis"
              className="w-full h-auto overflow-hidden"
            />
          </div>
          <h2 className="hero-profile__name text-6xl text-tomato mb-2 font-semibold">
            Balikis Oyeleye
          </h2>
          <p className="text-2xl">I'm a Front-End Developer</p>
          <ul className="hero-profile__socials-links flex gap-6">{navLinks}</ul>
          <button className="border border-tomato text-tomato py-2 px-4 mt-4 hover:bg-tomato hover:text-bg-blue">
            <a
              href="#projects"
              className="text-xl flex items-center gap-2 font-semibold"
            >
              <span>View My Works</span>
              <FaArrowDown />
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
