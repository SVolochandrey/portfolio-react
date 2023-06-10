import "./style.css";
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
					<br />junior front-end developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
			</div>
		</header>
	);
}

export default Header;