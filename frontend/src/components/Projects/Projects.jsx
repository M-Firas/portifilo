import React from "react";
//CSS
import "./Projects.css";
// Projects Data
import projects from "../../projects";
//framer motion

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="pre--title">Projects</h1>
      <p className="title">Projects I've Built</p>

      <div className="container">
        {projects.map((project) => (
          <div className="grid--item">
            <img src={project.picture} alt="" />
            <h1>{project.name}</h1>
            <p>{project.discription}</p>
            <button>
              <a href={project.link} target="blank">
                Go To Site!
              </a>
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};
