import './Project.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../helpers/projectsList';
import { Transition } from 'react-transition-group';
import BtnGitHub from '../../components/btnGitHub/BtnGitHub';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  const [showProject, setShowProject] = useState(false);
  React.useEffect(() => {
    setShowProject(true);
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
    <Transition in={showProject} timeout={duration}>
      {state => (
        <main
          className="section"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="container">
            <div className="project-details">
              <h1 className="title-1">{project.title}</h1>
              <a
                className="livePageLink"
                href={project.livePageLink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.imgBig}
                  alt={project.title}
                  className="project-details__cover"
                />
              </a>

              <div className="project-details__desc">
                <p>Skills: {project.skills}</p>
              </div>

              {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            </div>
          </div>
        </main>
      )}
    </Transition>
  );
};

export default Project;
