import "./style.css";

import { AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="mailto:volochan.andrey@gmail.com"
                className="social__link"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail className="social__icons" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/s.volochandrey"
                target="_blank"
                className="social__link"
                rel="noreferrer"
              >
                <AiOutlineInstagram className="social__icons" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://t.me/Valdress"
                className="social__link"
                target="_blank"
                rel="noreferrer"
              >
                <BsTelegram className="social__icons" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/SVolochandrey"
                target="_blank"
                className="social__link"
                rel="noreferrer"
              >
                <AiFillGithub className="social__icons" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/andrew-volochan/"
                className="social__link"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="social__icons" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;