import { Link } from 'react-router-dom';
import './project.scss'

const Project = () => {

  const sampleProjects = [
    {
      title: 'P1',
      link: '/projects'
    },
    {
      title: 'P2',
      link: '/projects'
    },
    {
      title: 'P3',
      link: '/projects'
    },
    {
      title: 'P4',
      link: '/projects'
    },
  ]

  return (
    <>
    <h2 className='container project-h2'>Some Cool <span className="green">Projects</span> for you</h2>
    <div className="container project-container">
      {sampleProjects.map((project, index) => {
        return (
          <div className='project' key={index}>
            <img loading='lazy' src="./assets/proj1.png" alt="Project" />
            <div>
              <h4>{project.title}</h4>
              <Link to={project.link}>See Project</Link>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Project;