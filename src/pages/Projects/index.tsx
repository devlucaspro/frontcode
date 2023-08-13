import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Project from "../../Components/Project";
import './projects.scss';

const Projects = () => {

  return (
    <>
      <Header />
      <main className='container main-container'>
        <img src="./assets/Astronaut.png" alt="Astronaut bg" />
        <div className="project-container">
          <h3>Welcome to our</h3>
          <h1 className="h1-project">Projects</h1>
        </div>
      </main>
      <Project h2={false} />
      
      <div className="container project-container-text">
        <p><span className="white">Turn design into code, we just provide the design and your</span> role is to develop our challenges, keep it up!</p>
        <div className="div-btns">
          <button>HTML</button>
          <button>CSS</button>
          <button>JS</button>
          <button>React</button>
          <button>Typescript</button>
        </div>
      </div>

      <Project h2={false} secondFile={true} projectInfo={true} />
      <Footer />
    </>
  )
}

export default Projects;