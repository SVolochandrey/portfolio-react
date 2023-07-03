import { Transition } from 'react-transition-group';
import Project from '../../components/project/Project';
import { projects } from '../../helpers/projectsList';
import React, { useState } from 'react';
import './Projects.css';

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
                    descr={project.descr}
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




// import { Transition } from 'react-transition-group';
// import Project from '../../components/project/Project';
// import { projects } from '../../helpers/projectsList';
// import React, { useState } from 'react';
// import './Projects.css';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const Projects = () => {
//   const [showProjects, setShowProjects] = useState(false);
//   React.useEffect(() => {
//     setShowProjects(true);
//   }, []);

//   const duration = 250;

//   const defaultStyle = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0,
//   };

//   const transitionStyles = {
//     entering: { opacity: 0 },
//     entered: { opacity: 1 },
//   };

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <Transition in={showProjects} timeout={duration}>
//       {state => (
//         <main
//           className="section"
//           style={{
//             ...defaultStyle,
//             ...transitionStyles[state],
//           }}
//         >
//           <div className="container">
//             <h2 className="title-1">Projects</h2>
//             <Slider {...settings} className='slider'>
//               {projects.map((project, index) => {
//                 return (
//                   <Project
//                     key={index}
//                     title={project.title}
//                     img={project.img}
//                     index={index}
//                   />
//                   );
//                 })}
//             </Slider>
//           </div>
//         </main>
//       )}
//     </Transition>
//   );
// };

// export default Projects;