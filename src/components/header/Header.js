import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import './Header.css';
import avatar from './avatar.jpg';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  // Показать секцию после монтирования компонента
  React.useEffect(() => {
    setShowHeader(true);
  }, []);

  const duration = 250; // Длительность анимации в миллисекундах

  // Стили для разных состояний анимации
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  };

  return (
    <Transition in={showHeader} timeout={duration}>
      {state => (
        <header
          className="header"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="container">
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
                JavaScript. I strive to create websites with appealing designs
                and user-friendly experiences. I am eager to improve my skills
                in React and learn efficient state management and building
                reusable components. I am ready to actively learn and join a
                team where I can contribute and grow alongside experienced
                developers.
              </p>
            </div>
          </div>
        </header>
      )}
    </Transition>
  );
};

export default Header;
