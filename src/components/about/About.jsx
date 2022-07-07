import React from "react";
import "./about.css";
import aboutImg from "../../assets/images/Screenshot.jpg";

const About = () => {
  return (
    <section className="about bg-bg-blue">
      <div className="container mx-auto py-8">
        <h2 className="text-6xl text-center font-bold text-tomato">
          About me.
        </h2>
        <div className="about-main flex flex-col items-center justify-center md:flex-row gap-6 mt-8">
          <div className="about-image">
            <img src={aboutImg} alt="about" className="w-full h-auto" />
          </div>
          <div className="about-text text-lg">
            <p className="mb-4">
              Balikis Oyeleye ( Pronounced as Ba-lee-kiss O-ye-le-ye ) is a
              Civil Engineering Student transitioning into Web development. She
              is a self-taught Frontend Developer specializing in building web
              application and responsive websites.
            </p>
            <p className="mb-4">
              She is an optimistic, enthusiastic and motivated Junior Frontend
              Developer that is seeking an opportunity to contribute to
              Institutions by implementing ideas, concepts and methodologies
              learned thereby adding values to the organization.
            </p>
            <p className="mb-6">
              I'm passionate about building beautiful and functional
              applications. I build projects using HTML, CSS, Javascript, React
              etc.
            </p>
            <button className="border border-tomato px-5 py-2 hover:bg-tomato hover:text-bg-blue">
              <a href="#contact" className="font-bold text-2xl">
                Contact Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
