import React from "react";
import "./project.css";
import { data } from "../../assets/projectData";

const Projects = () => {
  return (
    <section id="projects" className="bg-bg-blue pb-10">
      <div className="container mx-auto py-8">
        <h2 className="text-6xl text-center text-tomato font-bold">
          My Projects.
        </h2>
        <div className="projects mt-8 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
          {data.map((proj) => {
            return (
              <div className="project" key={proj.id}>
                <div className="project-image mb-4">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-auto"
                  />
                </div>
                <h2 className="project-name text-4xl font-bold my-6">
                  {proj.name}
                </h2>
                <p className="project-about text-xl">{proj.about}</p>
                <div className="project-stack flex gap-12 my-6">
                  {proj.stack.map((element, idx) => {
                    return (
                      <h5
                        className="px-4 py-2 rounded-lg font-bold text-lg bg-tomato text-bg-blue"
                        key={idx}
                      >
                        {element}
                      </h5>
                    );
                  })}
                </div>
                <div className="project-links flex gap-4">
                  {proj.links.map((link, idx) => {
                    return (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-xl border border-tomato py-2 px-4 text-tomato hover:text-bg-blue hover:bg-tomato"
                        key={idx}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
