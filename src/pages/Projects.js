import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList"

const Projects = () => {
	return (
		<main className="section">
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
