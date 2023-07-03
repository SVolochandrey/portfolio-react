import { TiLocation } from 'react-icons/ti';
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const Contacts = () => {
  const [showContacts, setShowContacts] = useState(false);
  React.useEffect(() => {
    setShowContacts(true);
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
    <Transition in={showContacts} timeout={duration}>
      {state => (
        <main
          className="section"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Location</h2>
                <a
                  href="https://goo.gl/maps/YENSrpa8iaBnQCPn7"
                  rel="noreferrer"
                  target="_blank"
                >
                  <TiLocation className="locationIcon" /> Odesa, Ukraine
                </a>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Telegram / WhatsApp</h2>
                <p>
                  <a href="tel:+79051234567">+380 (96) 855-08-08</a>
                </p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Email</h2>
                <p>
                  <a href="mailto:webdev@protonmail.com">
                    volochan.andrey@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </main>
      )}
    </Transition>
  );
};

export default Contacts;
