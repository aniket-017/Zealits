// Projects.js

import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'The Indian Army',
    description: 'The Southern Command is India\'s oldest field army and spans over a period of two centuries. Zealits designed a Directory Management System for the Southern Command - an Intranet application accessed within the Indian army\'s network of headquarters and camps all over India. The Directory Management system is an effective, accessible, and reliable source of information about army officers across the network. It remains inaccessible to the public and uses state-of-the-art technologies and the highest levels of data encryption.',
    imageUrl: 'https://example.com/indian-army.jpg', // Replace with actual image URL
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.imageUrl} alt={project.title} />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
