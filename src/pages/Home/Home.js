import Header from '../../components/header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <>
      <Header />
      <Projects />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Tech skills</h2>
              <p>GIT | HTML | CSS | REACT | REDUX | SASS/SCSS | JAVA SCRIPT</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Soft skills</h2>
              <p>
                Collaboration | Perseverance | Attention to detail |
                Self-motivation | Adaptability
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Languages</h2>
              <p>English - B1 | Ukrainian - C2 | Russian - C2</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
