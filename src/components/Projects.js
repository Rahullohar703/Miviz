// Projects.js
import React from 'react';
import './Projects.css'; // Import CSS file

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <img 
        src="https://via.placeholder.com/300" 
        alt="Project 1" 
        className="project-image"
      />
      <img 
        src="https://via.placeholder.com/300" 
        alt="Project 2" 
        className="project-image"
      />
      <img 
        src="https://via.placeholder.com/300" 
        alt="Project 3" 
        className="project-image"
      />
      <img 
        src="https://via.placeholder.com/300" 
        alt="Project 4" 
        className="project-image"
      />

      {/* "See all Projects" text */}
      <div className="see-all-projects">
        <a href="#all-projects">See all Projects</a>
      </div>
    </section>
  );
};

export default Projects;
