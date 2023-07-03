import { NavLink } from 'react-router-dom';
import './Project.css';

const Project = ({ title, img, index, descr }) => {
  return (
    <div className="project-container">
      <li className="project">
        <NavLink to={`/project/${index}`}>
          <div className="image-container">
            <img src={img} alt={title} className="project__img" />
            <div className="project-overlay">
              <p className="project-descr">{descr}</p>
            </div>
          </div>
          <h3 className="project__title">{title}</h3>
        </NavLink>
      </li>
    </div>
  );
};

export default Project;
