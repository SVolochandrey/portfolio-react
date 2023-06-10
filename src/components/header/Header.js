import './style.css';
import avatar from './avatar.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={avatar} alt="avatar" className="header__avatar" />
        <h1 className="header__title">
          <strong>
            Hi, i'm <em>Andrew</em>
          </strong>
          <br />
          junior front-end developer
        </h1>
        <div className="header__text">
          <p>
            I am a front-end developer with good knowledge in HTML, CSS, and
            JavaScript. I strive to create websites with appealing designs and
            user-friendly experiences. I am eager to improve my skills in React
            and learn efficient state management and building reusable
            components. I am ready to actively learn and join a team where I can
            contribute and grow alongside experienced developers.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
