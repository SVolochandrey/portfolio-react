import { Transition } from 'react-transition-group';
import Project from '../components/project/Project';
import { projects } from './../helpers/projectsList';
import React, { useState } from 'react';

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  React.useEffect(() => {
    setShowProjects(true);
  }, []);

  const duration = 250;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  };

  return (
    <Transition in={showProjects} timeout={duration}>
      {state => (
        <main
          className="section"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
              {projects.map((project, index) => {
                return (
                  <Project
                    key={index}
                    title={project.title}
                    img={project.img}
                    index={index}
                  />
                  );
                })}
            </ul>
          </div>
        </main>
      )}
    </Transition>
  );
};

export default Projects;