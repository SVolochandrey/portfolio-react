import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, index }) => {
  return (
	<div className='project-container'>
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
	</div>
  );
};

export default Project;
