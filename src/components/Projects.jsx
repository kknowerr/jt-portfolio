import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';

const ProjectCard = ({ title, content, image }) => {
  return (
    <motion.div className="flex flex-col items-center w-10/12 md:w-1/2 lg:w-1/3 p-4">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded" />
      <div className="flex flex-col items-center">
        <h4 className="mb-2 font-bold text-xl">{title}</h4>
        <p className="text-center">{content}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-12">
    <div className="text-center mb-12">
    <h1 className="font-visuletpro font-semibold text-[52px] text-black leading-[75px] text-center text-center mt-8">
        <span className="text-gradient"> 
          Projects
        </span>{" "}
      </h1>
      <h2 className="font-visuletpro font-semibold text-[24px] text-black mt-8">
        Here are some of the projects I've been working on. Feel free to browse through and let me know if you have any questions!
      </h2>
    </div>
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
