// import { Transition } from 'react-transition-group';
// import Project from '../components/project/Project';
// import { projects } from './../helpers/projectsList';
// import React, { useState } from 'react';
// import Slider from "react-slick";

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
//             <ul className="projects">
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
//             </ul>
//           </div>
//         </main>
//       )}
//     </Transition>
//   );
// };

// export default Projects;

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import { Transition } from 'react-transition-group';
// import Project from '../components/project/Project';
// import { projects } from './../helpers/projectsList';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

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
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,

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
//             <div className="slider-container">
//               <Slider {...settings}>
//                 {projects.map((project, index) => (
//                   <Project
//                     key={index}
//                     title={project.title}
//                     img={project.img}
//                     index={index}
//                   />
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </main>
//       )}
//     </Transition>
//   );
// };
// export default Projects;




import React, { useState } from 'react';
import Slider from 'react-slick';
import { Transition } from 'react-transition-group';
import Project from '../components/project/Project';
import { projects } from './../helpers/projectsList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
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
            <div className="slider-container">
              <Slider {...settings}>
                {projects.map((project, index) => (
                  <div key={index}>
                    <Project
                      title={project.title}
                      img={project.img}
                      index={index}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </main>
      )}
    </Transition>
  );
};

export default Projects;