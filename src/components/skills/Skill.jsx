import React from "react";
import "./skill.css";
import {
  Css,
  Bootstrap,
  Git,
  Html,
  Js,
  ReactJs,
  Tailwind,
  npm,
} from "../../assets/images";

const Skill = () => {
  return (
    <section className="skills bg-bg-blue pb-10">
      <div className="container mx-auto py-8">
        <h2 className="text-6xl text-center font-bold text-tomato">
          Technical Skills.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-y-6 justify-center mt-8">
          <div className="skill flex flex-col items-center gap-4">
            <div className="skill-image w-1/2">
              <img src={Html} alt="html" className="w-full h-auto" />
            </div>
            <h5 className="skill-text text-xl font-semibold">Html</h5>
          </div>
          <div className="skill flex flex-col items-center gap-4">
            <div className="skill-image w-1/2">
              <img src={Css} alt="css" className="w-full h-auto" />
            </div>
            <h5 className="skill-text text-xl font-semibold">Css</h5>
          </div>
          <div className="skill flex flex-col items-center gap-4">
            <div className="skill-image w-1/2">
              <img src={Js} alt="javascript" className="w-full h-auto" />
            </div>
            <h5 className="skill-text text-xl font-semibold">Javascript</h5>
          </div>
          <div className="skill flex flex-col items-center gap-4">
            <div className="skill-image w-1/2">
              <img src={ReactJs} alt="react" className="w-full h-auto" />
            </div>
            <h5 className="skill-text text-xl font-semibold">ReactJs</h5>
          </div>
          <div className="skill flex flex-col items-center gap-4">
            <div className="skill-image w-1/2">
              <img src={Bootstrap} alt="bootstrap" className="w-full h-auto" />
            </div>
            <h5 className="skill-text text-xl font-semibold">Bootstrap</h5>
          </div>
          <div className="skill flex flex-col items-center gap-4 justify-center relative">
            <div className="skill-image w-1/2">
              <img
                src={Tailwind}
                alt="tailwind css"
                className="w-full h-auto"
              />
            </div>
            <h5 className="tailwind skill-text text-xl font-semibold gap-4">
              Tailwind Css
            </h5>
          </div>
          <div className="skill flex flex-col items-center gap-4">
            <div className="skill-image w-1/2">
              <img src={Git} alt="git" className="w-full h-auto" />
            </div>
            <h5 className="skill-text text-xl font-semibold">Git</h5>
          </div>
          <div className="skill flex flex-col items-center gap-4">
            <div className="skill-image w-1/2">
              <img src={npm} alt="npm" className="w-full h-auto" />
            </div>
            <h5 className="skill-text text-xl font-semibold">Npm</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
