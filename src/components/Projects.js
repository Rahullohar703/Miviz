// src/components/Projects.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const projects = [
    {
      id: 6,
      img: '/Airlie beach 01.jpg',
      title: 'Airlie Beach, Australia',
      relatedImages:
       ['/Airlie beach 02.jpg',
        '/Airlie beach 03.jpg',
        '/Airlie beach 04.jpg',
        '/Airlie beach 04.1.jpg',
        '/Airlie beach 05.jpg',
        '/Airlie beach 06.jpg',
        '/Airlie beach 07.jpg',
        '/Airlie beach 08.jpg',
        '/Airlie beach 09.jpg'
      ],
    },
    {
      id: 4,
      img: '/Shirur 02.jpg',
      title: 'Anandabhavan, Shirur',
      relatedImages: ['shirur 01.jpg', 'Shirur 03.jpg','Shirur 04.jpg','Shirur 05.jpg'],
    },
    {
      id: 8,
      img: '/Malda 01.jpg',
      title: 'Twin House, Malda',
      relatedImages: ['/Malda 02.jpg','/Malda 03.jpg','/Malda 04.jpg'],
    },
    {
      id: 7,
      img: '/saswad 01.jpg',
      title: 'Avantika Villa, Saswad',
      relatedImages: ['saswad 02.jpg','saswad 03.jpg','saswad 04.jpg','saswad 05.jpg'],
    },
    {
      id: 5,
      img: '/Vishwacon 01.jpg',
      title: 'Vishwacon Society, Satara',
      relatedImages: ['/Vishwacon 02.jpg'],
    },
    {
      id: 1,
      img: '/Satara 01.jpg',
      title: 'Shinde Nivas, Satara',
      relatedImages: ['/Satara 02.jpg'],
    },
    {
      id: 2,
      img: '/Jambhulwadi 01.png',
      title: 'Jambhale House, Jambhulwadi',
      relatedImages: [
        '/Jambhulwadi 02.png',
        '/Jambhulwadi 03.png',
        '/Jambhulwadi 04.png',
        '/Jambhulwadi 05.png',
        '/Jambhulwadi 06.png',
      ],
    },
    {
      id: 3,
      img: 'Andhra pradesh 02.png',
      title: 'Box House, Andhra Pradesh',
      relatedImages: ['/Andhra pradesh 01.jpg'],
    },
  ];

  const openModal = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveProject(null);
    setFullscreenImage(null);
  };

  const openFullscreenImage = (image) => {
    setFullscreenImage(image);
  };

  return (
    <section className="projects">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <motion.img
            src={project.img}
            alt={`Project ${project.id}`}
            className="project-image"
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => openModal(project)}
          />
          <h4 className="project-title">{project.title}</h4>
        </div>
      ))}

      {showModal && activeProject && (
        <div className="modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button onClick={closeModal} className="close-button">&times;</button>
            <h3>Related Photos</h3>
            <div className="related-images">
              {activeProject.relatedImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Related Image ${index + 1}`}
                  className="related-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  onClick={() => openFullscreenImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {fullscreenImage && (
        <div className="fullscreen-modal">
          <div className="modal-overlay" onClick={() => setFullscreenImage(null)}></div>
          <motion.img
            src={fullscreenImage}
            alt="Fullscreen Image"
            className="fullscreen-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setFullscreenImage(null)}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
