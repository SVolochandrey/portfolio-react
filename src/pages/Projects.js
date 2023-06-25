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

// import React from 'react';
// import Slider from 'react-slick';
// import Project from '../components/project/Project';
// import { projects } from './../helpers/projectsList';

// const Projects = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <main className="section">
//       <div className="container">
//         <h2 className="title-1">Projects</h2>
//         <Slider {...settings}>
//           {projects.map((project, index) => (
//             <div key={index}>
//               <Project
//                 title={project.title}
//                 img={project.img}
//                 index={index}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </main>
//   );
// };

// export default Projects;
